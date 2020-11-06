import React from "react";
import EditTaskBox from "./editTaskBox";

const TodoItem = (props) => {
  
  const {
         taskName,
         isBeingEdited,
         handleDelete,
         handleEdit,
         handleEditChange,
         handleSaveEditedTodo,
         itemBeingEdited
         } = props;
    return (
        <div className="todo-item">
          <div className="taskData">
              <li className="list">
                  {!isBeingEdited ? 
                  <div className="taskName">{taskName}</div> 
                  :
                  <EditTaskBox
                      itemBeingEdited={itemBeingEdited}
                    handleEditChange={handleEditChange}
                    handleSaveEditedTodo={handleSaveEditedTodo}
                  />
                }
              </li>
          </div>
          
          {!isBeingEdited?
          <div className="util-buttons">
                <button 
                  style={{marginRight:"10px"}} 
                  className="edit" 
                  onClick={handleEdit}>
                    Edit
                </button>
                <button 
                  style={{marginRight:"10px"}} 
                  className="delete" 
                  onClick={handleDelete}>
                    Delete
                </button>
          </div>
        : null
        }
          
        </div>
    )
}

export default TodoItem;