import React, { useState } from 'react';
import axios from 'axios';

const Task = ({ task }) => {
  const [comp, setComp] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleChange = () => {
    setComp(!comp);
  };

  const handleUpdate = () => {
    setEditing(true);
  };

  const handleUpdateSubmit = () => {
   
    axios.patch(`/api/v1/tasks/${task._id}`, { title: updatedTitle })
      .then(response => {
        console.log('Task updated:', response.data);
        setEditing(false);
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`/api/v1/tasks/${task._id}`)
      .then(response => {
        console.log('Task deleted:', response.data);
       
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div className='h-[50px] w-[800px] flex items-center space-x-4 border-gray-200 border-[1px] relative'>
      <input
        type='checkbox'
        className='form-checkbox ml-3'
        checked={comp}
        onChange={handleChange}
      />
      <div className={`${comp ? 'line-through' : ''} ml-2`}>
        {editing ? (
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            onBlur={handleUpdateSubmit}
            autoFocus
          />
        ) : (
          task.title
        )}
      </div>
      <button
        onClick={handleUpdate}
        className='px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 right-20 absolute'
      >
        Update
      </button>
      <button
        onClick={handleDelete}
        className='px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 right-2 absolute'
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
