import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import Plant from "./Plant";
import "./PlantList.css";

export default function PlantList() {
  const [endPoint, setEndPoint] = useState("plants");

  const [plants] = useApi(endPoint);

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
