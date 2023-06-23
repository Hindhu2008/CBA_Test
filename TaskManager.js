import React, { useState } from 'react';
import './login.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false
  });

  const handleInputChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      completed: false
    });
  };

  const handleTaskStatusChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSortByDueDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setTasks(sortedTasks);
  };

  const handleSortByCompletionStatus = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
    setTasks(sortedTasks);
  };

  return (
    <div>
      <section class="ftco-section">
		<div class="container">
      {/* <div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">TaskManager</h2>
				</div>
			</div> */}

      <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
					{/* <div class="login-wrap p-4 p-md-5"> */}

      <div class="icon d-flex align-items-center justify-content-center">
		      	</div>
            <h3 class="text-center mb-4">Task Management</h3>
      {/* <h1>Task Manager</h1> */}

      {/* Task Creation Form */}
      <form onSubmit={handleAddTask}>
      <div class="form-group">
        <input
          type="text"
          class="form-control rounded-left"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        </div>

        <div class="form-group">
        <input
          type="text"
          class="form-control rounded-left"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        </div>

        <div class="form-group">
        <input
          type="date"
          className="form-control rounded-left"
          name="dueDate"
          placeholder="Select a date"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        </div>
        <div className="form-group">
        <button type="submit" className='btn btn-primary rounded submit p-3 px-5'>Add Task</button>
        </div>
      </form>
<br/>
<br/>
<br/>
      {/* Task List */}
      <div>
        <h3 class="text-center mb-4">Task List</h3>
        <div className="form-group">
        <button onClick={handleSortByDueDate} className='btn btn-primary rounded submit p-3 px-5'>Sort by Due Date</button>
        </div>
        <br/>
        <br/>
        <br/>
        <h5><center>OR</center></h5>
        
        <div className="form-group">
        <button onClick={handleSortByCompletionStatus} className='btn btn-primary rounded submit p-3 px-5'>Sort by Completion Status</button>
        </div>
        <br/>
        <br/>
        <br/>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>
              Status: {task.completed ? 'Completed' : 'Incomplete'}
              <button onClick={() => handleTaskStatusChange(index)} className='btn btn-primary rounded submit p-3 px-5'>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
            </p>
            <button onClick={() => handleDeleteTask(index)} className='btn btn-primary rounded submit p-3 px-5'>Delete</button>
          </div>
        ))}
      </div>
    {/* </div> */}
    </div>
    </div></div>
    </section>
  </div>
    
  );
}

export default TaskManager;
