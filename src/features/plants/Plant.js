import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useModal from "../../components/Modal/useModal";
import Modal from "../../components/Modal/Modal";

export default function Plant({ plant }) {
  const { modalProps, openModal } = useModal();
  const { deleteModalProps, openDeleteModal } = useModal();

  const { values, bindInput, resetValues } = useForm(plant);

  function createModal() {
    openModal();
  }

  function handleSubmit() {
    console.log(values);
  }
  function confirmDelete() {
    alert("confirm delete");
  }

  return (
    <React.Fragment key={plant.plantId}>
      <td>{plant.plantId}</td>
      <td>{plant.name}</td>
      <td>{plant.address}</td>
      <td>{plant.city}</td>
      <td>{plant.phone}</td>
      <td>{plant.email}</td>
      <td>
        <button className="btn btn-primary" onClick={openModal}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={openDeleteModal}>
          Delete
        </button>
        <Modal {...modalProps} title="Adding new plant" onSave={handleSubmit} />
        <Modal {...modalProps} title="Adding new plant" onSave={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="name1" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name1"
                {...bindInput("name")}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address1" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="address1"
                {...bindInput("address")}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="city1" className="col-sm-2 col-form-label">
              City
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="city1"
                {...bindInput("city")}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone1" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="phone1"
                {...bindInput("phone")}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email1" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email1"
                {...bindInput("email")}
              />
            </div>
          </div>
        </Modal>
      </td>
    </React.Fragment>
  );
}
