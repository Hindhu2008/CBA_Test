import React from 'react';
// import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
// import TaskManager from './TaskManager';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Link to="/login">Login</Link>
      <Link to="/task-manager">Task Manager</Link> */}
      {/* <Routes classNam="form-group">
        <Route path="/login" className="btn btn-primary rounded submit p-3 px-5" element={<Login />} />

    
        <Route path="/task-manager" element={<TaskManager />} />
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
