import React from "react";
import "./../styles/App.css";
import ListItem from "./ListItem";

function App() 
{
	const [newItem , setNewItem ] = React.useState("");
  const [itemList , setItemList]  = React.useState([]);
  const [edit , setEdit] = React.useState(false);
  const [save, setSave] = React.useState(false);
	const [editValue , setEditValue] = React.useState("");
	
	const handleChange = (event) => {
    //(event.target.value);
    setNewItem(event.target.value);
  }
  const handleClick = () => {
    let inputItem = newItem;
    //console.log(newItem);
    if(inputItem === "") return;
    let inputList = [...itemList , inputItem]
    //console.log(inputList);
    setNewItem("");
    setItemList(inputList);
    
  }
  const handleDelete = (id) => {
    let items = [...itemList];
    
    items.splice(id,1)
    setItemList(items);
  }
  const handleEdit = (id) => {
    setEdit(true);
    setSave(true);
    
  }

  const handleSave = (id) => {
    let itemToSave = editValue;
    if(itemToSave !==""){
      itemList[id] = itemToSave;
      setItemList(itemList);
      setEdit(false);
      setSave(false);
  }
  }
  const handleEditChange = (event) => {
    setEditValue(event.target.value);
    
  }

	return (
	<div id="main">
		<h1>TODO LIST</h1>
      <input type="text" id="task" onChange={handleChange} value={newItem}/>
      <button id="btn" style={{margin:20}} onClick={handleClick}>Add</button>
      
      {itemList.map((item, index) => (
				<ListItem 
			   	
          
          key={index}
          item={item}
          handleChange={handleChange}
          handleClick={handleClick}
          handleDelete={()=>handleDelete(index)}
          handleEdit={() => handleEdit(index)}
          edit={edit}
          save={save}
          handleSave={() => handleSave(index)}
          editValue={editValue}
          handleEditChange={handleEditChange}
        />
        )
      )}
	 
	</div>
	);
}


export default App;
