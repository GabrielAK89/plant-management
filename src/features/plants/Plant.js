import React from "react";
import { Link } from "react-router-dom";

export default function Plant({ plant }) {
  return (
    <React.Fragment key={plant.plantId}>
      <td>{plant.plantId}</td>
      <td>{plant.name}</td>
      <td>{plant.address}</td>
      <td>{plant.city}</td>
      <td>{plant.phone}</td>
      <td>{plant.email}</td>
      <td>
        <Link to={`plants/${plant.plantId}`}>Edit</Link>|
        <Link to={"plants"}>Delete</Link>
      </td>
    </React.Fragment>
  );
}
