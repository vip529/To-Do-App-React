import React from "react";

const  TodoInput  = (props)=> {
    const {item,handleChange,addTodoItem} = props;
    return (
      <>
            <input
              id="task"
              type="string"
              value={item}
              onChange={handleChange}
            />
            <button 
              type="submit" 
              id="btn" 
              className="addTask"
              onClick={addTodoItem}>
            Add Task
          </button>
      </>
    );
  }

export default TodoInput;
