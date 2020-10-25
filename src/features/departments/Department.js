import React from 'react'

export default function Department({department, handleEdit, handleDelete}) {
    function handleEditClick() {
    handleEdit(department);
  }

  function handleDeleteClick() {
    handleDelete(department);
  }
    
    return (
    <tr key={department.departmentId}>
      <th scope="row">{department.departmentId}</th>
      <td>{department.plantId}</td>
      <td>{department.name}</td>
      <td>{department.description}</td>
      <td>
        <button className="btn btn-primary" onClick={handleEditClick}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
    )
}
