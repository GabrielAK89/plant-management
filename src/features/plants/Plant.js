import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useModal from "../../components/Modal/useModal";
import Modal from "../../components/Modal/Modal";

export default function Plant({ plant, openModal }) {
  //const { modalProps, openModal } = useModal();
  //const { deleteModalProps, openDeleteModal } = useModal();

  // const { values, bindInput, resetValues } = useForm(plant);

  function createModal() {
    openModal();
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
        <button className="btn btn-primary" onClick={createModal}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={createModal}>
          Delete
        </button>
      </td>
    </React.Fragment>
  );
}
