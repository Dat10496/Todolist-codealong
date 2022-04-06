import React from "react";

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} action="#" name="form">
      <label htmlfor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Add item
      </button>
    </form>
  );
}

export default AddTaskForm;
