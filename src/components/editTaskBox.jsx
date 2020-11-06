import React from 'react';
const EditTaskBox = (props) => {
  const {
          itemBeingEdited,
          handleEditChange,
          handleSaveEditedTodo
         } = props;

  return (
   <>
           <input
              className="editTask"
              type = "string"
              value={itemBeingEdited}
              onChange={handleEditChange}
            />
            <button 
              type="submit" 
              className="saveTask" 
              disabled = {itemBeingEdited === ""}
              onClick={handleSaveEditedTodo}
              >
            Save
          </button>
   </>
  )
}

export default EditTaskBox;