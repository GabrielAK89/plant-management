import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import useForm from "../../hooks/useForm";

import Plant from "./Plant";
import "./PlantList.css";
import useModal from "../../components/Modal/useModal";
import Modal from "../../components/Modal/Modal";
import DeleteModal from "../../components/Modal/DeleteModal";

export default function PlantList() {
  const [endPoint, setEndPoint] = useState("plants");
  
  const [plants, error, mutate, del] = useApi(endPoint);
console.log(plants);
  const [modal, setModal] = useState();
  const [actionType, setActionType] = useState();
  const { modalProps, openModal } = useModal();
  
  const [formValues, setFormValues] = useState(null);
  const { values, bindInput, resetValues } = useForm(formValues);

  function handleSubmit() {
    console.log(values);
    if (values !== null) {
      if (actionType === "ADD") {
        mutate(values, "POST"); 
      }
      else if (actionType === "EDIT") {
        mutate(values, "PUT"); 
      }
      else {
        console.log("Delete");
        setEndPoint(`plants/${values.plantId}`)
        mutate(values.plantId, "DELETE"); 
        setEndPoint("plants");
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

  function handleEditPlantClick(plant) {
    setModal(true)
    console.log("edit", plant);
    setFormValues(plant);
    setActionType("EDIT");
    openModal();
  }

  function handleDeletePlantClick(plant) {
    setModal(false)
    console.log("delete", plant);
    setActionType("DELETE");
    setFormValues(plant);
    openModal()
  }

   
  async function handleDeleteSubmit() {

    const newEndPoint = `https://plantmanagerapi20200929154828.azurewebsites.net/v1/plants/${values.plantId}`;
    //console.log(newEndPoint);
    
    const res = await fetch(newEndPoint, {
      method: 'DELETE',
    }).then()

    window.location.reload();

    console.log(res); 
  }

  const editAddModal = <Modal {...modalProps} title="Adding/Editing a plant" onSave={handleSubmit}>
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
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="address"
              {...bindInput("address")}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="city" className="col-sm-2 col-form-label">
            City
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="city"
              {...bindInput("city")}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="phone"
              {...bindInput("phone")}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              {...bindInput("email")}
            />
          </div>
        </div>
        </Modal>
  const deleteModal = <DeleteModal {...modalProps} title="Deleting a plant" onSave={handleDeleteSubmit}>
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
  if (!plants) {
    return <h2>Loading</h2>;
  }

  const objKeys = plants[0];
  if (!objKeys) {
    return <h2>Loading after submit</h2>
  } 


  return (
    <div className="main">
      <h1>Plants List</h1>
      
      <button className="btn btn-primary addbtn" onClick={handleAddClick}>
        Add Plant
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
          {plants.map((item) => (
            <Plant
              key={item.plantId}
              plant={item}
              handleEditPlant={handleEditPlantClick}
              handleDeletePlant={handleDeletePlantClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
