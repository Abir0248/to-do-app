import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="my-3">To Do List</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <div className="input-group mb-3">
          <input
            value={newTask}
            onChange={handleNewTaskChange}
            type="text"
            className="form-control"
            placeholder="Enter a new task"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-primary">
              Add Task
            </button>
          </div>
        </div>
      </form>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="alert alert-primary d-flex justify-content-between align-items-center"
        >
          {task}
          <button
            onClick={() => handleTaskDelete(index)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default ToDoList;
