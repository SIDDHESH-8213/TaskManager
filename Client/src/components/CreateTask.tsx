import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleCreateTask = () => {
    
    axios.post('/api/v1/tasks/', { title: taskTitle })
      .then(response => {
        
        console.log('Task created:', response.data);
       
        setTaskTitle('');
      })
      .catch(error => {
        
        console.error('Error creating task:', error);
      });
  };

  return (
    <div className='top-[150px] left-1/2 transform translate-x-[-50%] absolute h-[200px] w-[550px] border-[4px] border-gray-400'>
      <div className='text-2xl mt-2 text-black transform absolute left-1/2 translate-x-[-50%]'>
        Create Task
      </div>
      <input
        type="text"
        placeholder='Create Task'
        value={taskTitle}
        onChange={handleTitleChange}
        className='h-[45px] w-[500px] border-[2px] px-2 border-gray-500 absolute top-20 transform translate-x-[-50%] left-1/2'
      />
      <button
        onClick={handleCreateTask}
        className='px-4 py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600 absolute top-32 left-1/2 transform translate-x-[-50%]'
      >
        Create
      </button>
    </div>
  );
}

export default CreateTask;
