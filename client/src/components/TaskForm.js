import React from 'react';

export const TaskForm = ({ onSubmit, newTask, setNewTask }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button>Add task</button>
    </form>
  );
};
