import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import ProjectState from './container/projectsContext/projectsState'
import TaskState from './container/taskContext/TaskState'
import AuthState from './container/authContext/authState'

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <ProjectState>
      <TaskState>
        <AuthState>
          <App />
        </AuthState>
      </TaskState>
    </ProjectState>
  </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
