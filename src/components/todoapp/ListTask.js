import React, { useState } from 'react';

const ListTask = ({ task, index, removeTask, editTask, toggleEdit }) => {
    const [newTitle, setNewTitle] = useState(task.title);

    return (
        <div className='list-tasks'>
            {task.isEditing ? (
                <>
                    <input
                        type='text'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={() => editTask(index, newTitle)} className='save-btn'>Save</button>
                    <button onClick={() => toggleEdit(index)} className='cancel-btn'>Cancel</button>
                </>
            ) : (
                <>
                    {task.title}
                    <div className='button-container'>
                    <button onClick={() => toggleEdit(index)} className='edit-btn'>Edit</button>
                    <button onClick={() => removeTask(index)} className='delete-btn'>Delete</button>
                    </div>
                    
                </>
            )}
        </div>
    );
}

export default ListTask;
