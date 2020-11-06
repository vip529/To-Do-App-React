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
        <>
          <li className="list">
              {!isBeingEdited ? 
              (taskName) 
              :
              <EditTaskBox
                  itemBeingEdited={itemBeingEdited}
                 handleEditChange={handleEditChange}
                 handleSaveEditedTodo={handleSaveEditedTodo}
              />
            }
          </li>
          {!isBeingEdited?
          <div>
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
                    delete
                </button>
          </div>
        : null
        }
          
        </>
    )
}

export default TodoItem;