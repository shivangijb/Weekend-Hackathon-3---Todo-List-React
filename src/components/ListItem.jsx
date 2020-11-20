import React from "react";

export default function ListItem({item, handleClick, handleChange, handleDelete , handleEdit, edit, save , handleSave , editValue , handleEditChange}){
  return(
    <>
      <li className="list">{item}</li>
      <button className="editTask" style={{margin:10}} onClick={handleEdit}>Edit</button>
      <button className="deleteTask" style={{margin:10}} onClick={handleDelete}>Delete</button>
      {edit ? 
      
        <input className="editTask" type="text" value={editValue} onChange={handleEditChange} />
        
       : "" }
       {save ? 
       <button className="saveTask" style={{margin:10}} onClick={handleSave}>Save</button>
      :""}

    </>
  );
}