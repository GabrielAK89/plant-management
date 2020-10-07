import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import useForm from "../../hooks/useForm";

import Plant from "./Plant";
import "./PlantList.css";
import useModal from "../../components/Modal/useModal";
import Modal from "../../components/Modal/Modal";

export default function PlantList() {
  const [endPoint, setEndPoint] = useState("plants");

  const [plants] = useApi(endPoint);

  const { modalProps, openModal } = useModal();
  const { values, bindInput, resetValues } = useForm();

  function handleSubmit() {
    console.log(values);
    resetValues();
  }

  if (!plants) {
    return <h2>Loading</h2>;
  }

  const objKeys = plants[0];

  const capitalizeFirstLetter = (keyName) => {
    if (typeof keyName != "string") {
      return "";
    }
    return keyName.charAt(0).toUpperCase() + keyName.slice(1);
  };

  return (
    <div className="main">
      <h1>Plants List</h1>
      <button className="btn btn-primary" onClick={openModal}>
        Add Plant
      </button>
      <Modal {...modalProps} title="Adding new plant" onSave={handleSubmit}>
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
      <table>
        <thead>
          <tr>
            {Object.keys(objKeys).map((keyName, i) => (
              <th key={i}>{capitalizeFirstLetter(keyName)}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((item) => (
            <tr key={item.plantId}>
              <Plant key={item.plantId} plant={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
