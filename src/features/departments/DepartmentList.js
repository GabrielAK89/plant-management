import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import useForm from "../../hooks/useForm";


import Department from "./Department";
import "./DepartmentList.css";
import useModal from "../../components/Modal/useModal";
import Modal from "../../components/Modal/Modal";
import DeleteModal from "../../components/Modal/DeleteModal";

export default function DepartmentList() {
    const [endPoint, setEndPoint] = useState("departments");
    const [departments, error, mutate, del] = useApi(endPoint);
  
    const [plantEndpoint, setPlantEndpoint] = useState("plants")
    const [plants, errorPlant] = useApi(plantEndpoint);
  
  const [modal, setModal] = useState();
  const [actionType, setActionType] = useState();
  const { modalProps, openModal } = useModal();
  
  const [formValues, setFormValues] = useState(null);
  const { values, bindInput, resetValues } = useForm(formValues);
    
    function handleSubmit() {
        console.log(values);
        if (values !== null) {
            if (actionType === "ADD") {
                const plantIdString = values.plantId;
                values.plantId = parseInt(plantIdString,10);
            console.log(values);
            mutate(values, "POST"); 
        }
        else if (actionType === "EDIT") {
            mutate(values, "PUT"); 
        }
        else {
            console.log("Delete");
            setEndPoint(`departments/${values.departmentId}`)
            mutate(values.departmentId, "DELETE"); 
            setEndPoint("departments");
        }
        }
        //mutate(values, "PUT"); 
        resetValues();
    }

  function handleAddClick() {
    setModal(true)

    setActionType("ADD");
    resetValues();
    openModal();
  }

  function handleEditClick(department) {
    setModal(true)
    console.log("edit", department);
    setFormValues(department);
    setActionType("EDIT");
    openModal();
  }

  function handleDeleteClick(department) {
    setModal(false)
    console.log("delete", department);
    setActionType("DELETE");
    setFormValues(department);
    openModal()
  }

   
  async function handleDeleteSubmit() {

    const newEndPoint = `https://plantmanagerapi20200929154828.azurewebsites.net/v1/departments/${values.departmentId}`;
    //console.log(newEndPoint);
    
    const res = await fetch(newEndPoint, {
      method: 'DELETE',
    }).then()

    window.location.reload();

    console.log(res); 
    }


    const editAddModal = <Modal {...modalProps} title="Adding/Editing a department" onSave={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              {...bindInput("name")}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="plantId" className="col-sm-2 col-form-label">
            Plant
          </label>
            <div className="col-sm-10">
                <select id="plantId" onChange={(e)=> {bindInput(e.value)}}>
                    {plants !=null && plants.map(item => (
                        <option key={item.plantId} value={item.plantId}>{item.name}</option>
                   ))}
               </select>
            
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="description"
              {...bindInput("description")}
            />
          </div>
        </div>
    </Modal>
    
  const deleteModal = <DeleteModal {...modalProps} title="Deleting a department" onSave={handleDeleteSubmit}>
          </DeleteModal>

    
    if (error) {
    return <p>{error}</p>
  }
  
  const capitalizeFirstLetter = (keyName) => {
    if (typeof keyName != "string") {
      return "";
    }
    return keyName.charAt(0).toUpperCase() + keyName.slice(1);
  };
  if (!departments) {
    return <h2>Loading</h2>;
  }

  const objKeys = departments[0];
  if (!objKeys) {
    return <h2>Loading after submit</h2>
    } 
    
    return (
        <div className="main">
      <h1>Department List</h1>
      <button className="btn btn-primary" onClick={handleAddClick}>
        Add Department
      </button>

      {modal ? editAddModal : deleteModal}
      
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            {Object.keys(objKeys).map((keyName, i) => (
              <th scope="col" key={i}>{capitalizeFirstLetter(keyName)}</th>
            ))}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((item) => (
            <Department
              key={item.departmentId}
              department={item}
              handleEdit={handleEditClick}
              handleDelete={handleDeleteClick}
            />
          ))}
        </tbody>
      </table>
    </div>
    )
}
