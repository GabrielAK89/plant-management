import React from "react";

export default function Plant({ plant, handleEditPlant, handleDeletePlant }) {
  function handleEditClick() {
    handleEditPlant(plant);
  }

  function handleDeleteClick() {
    handleDeletePlant(plant);
  }

  return (
    <tr key={plant.plantId}>
      <th scope="row">{plant.plantId}</th>
      <td>{plant.name}</td>
      <td>{plant.address}</td>
      <td>{plant.city}</td>
      <td>{plant.phone}</td>
      <td>{plant.email}</td>
      <td>
        <button className="btn btn-primary" onClick={handleEditClick}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}
