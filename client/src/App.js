import React from 'react';
import './App.css';
import { TaskForm } from './components/TaskForm';
import { Tasks } from './components/Tasks';
import { addTask, getTasks } from './services/taskServices';

function App() {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await addTask({ task: newTask });
      setNewTask('');
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='App'>
      <h1>Todos 📝</h1>
      <TaskForm
        onSubmit={handleOnSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <Tasks getTasks={getAllTasks} tasks={tasks} newTask={newTask} />
    </div>
  );
}

export default App;
