import React, { useState } from "react";
import "./styles.css";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

const  App = ()=> {
  const [itemsList,setItemsList] = useState([]);
  const [item,setItem] = useState("");
  const [id,setId] = useState(0);
  const [itemBeingEdited,setItemBeingEdited] = useState("");
  const [editIndex, setEditIndex] = React.useState(-1);

  const addTodoItem = ()=>{
    let newTask = item;
    if(newTask === ""){
      return
    }

    let currentTasks = itemsList.map(item => item.taskName);
    if(currentTasks.includes(newTask)){
      setItemBeingEdited("");
      return;
    } 

    let newItem = {
      id: id,
      taskName: newTask,
      isBeingEdited: false,
    } 

    const updatedItemsList = [...itemsList,newItem];
    setItemsList(updatedItemsList);
    setItem("");
    setId(id+1);

  } 



  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleEditChange = (event) => {
    setItemBeingEdited(event.target.value);
  }
  const handleSaveEditedTodo = () => {
      let currentItemsList = [...itemsList];
      currentItemsList[editIndex].taskName = itemBeingEdited;
      currentItemsList[editIndex].isBeingEdited = false;
      setItemsList(currentItemsList); 
      setEditIndex(-1);
      setItemBeingEdited("");

  }
  
  const handleDelete = (id) => {
    const filteredItems = itemsList.filter((item) => item.id !== id);
    setItemsList(filteredItems);
  };
  const handleEdit = (index,id) => {

    let itemToEdit = itemsList[index];
    itemToEdit.isBeingEdited = true;

    let currentItemList = [...itemsList];
    currentItemList[index] = itemToEdit;
    setItemBeingEdited(itemToEdit.taskName);
    setEditIndex(index);
    setItemsList(currentItemList);
  };
    return (
      <div id="main">
            <h1>To Do App</h1>
            <TodoInput
              item={item}
              handleChange={handleChange}
              addTodoItem={addTodoItem}
            />
            <div className="todo-list">
                {itemsList && <h3>Todo List</h3>}
                {itemsList.map((item,index)=>{
                  return <TodoItem
                  key = {`${item}${index}`}
                  taskName={item.taskName}
                  isBeingEdited={item.isBeingEdited}
                  handleDelete={()=>handleDelete(item.id)}
                  handleEdit={()=>handleEdit(index,item.id)}
                  handleEditChange={handleEditChange}
                  handleSaveEditedTodo={handleSaveEditedTodo}
                  itemBeingEdited={itemBeingEdited}/>
                })}
            </div>
            

      </div>
    );
}


export default App;
