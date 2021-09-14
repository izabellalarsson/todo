import React from 'react';
import { deleteTask } from '../services/taskServices';

export const Tasks = ({ getTasks, newTask, tasks }) => {
  const handleOnClick = async (id) => {
    await deleteTask(id);
  };
  React.useEffect(() => {
    getTasks();
  }, [newTask, getTasks]);
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div>
              <p>{task.task}</p>
            </div>
            <button onClick={() => handleOnClick(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
