import React, { useState, useEffect } from 'react';
import Task from './Task';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    axios.get('/api/v1/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div className='left-1/2 transform translate-x-[-50%] top-[400px] absolute'>
      {tasks.map(task => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
}

export default ShowTask;
