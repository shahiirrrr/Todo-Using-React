import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [value, setValue] = useState("");

    const addItem = () => {
        if (value.trim()) {
            addTask(value);
            setValue(""); 
        }
    };

    return (
        <div className='input-container'>
            <input
                type='text'
                className='input'
                placeholder='Add a new task'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addItem()}
            />
            <button onClick={addItem} className='add-btn'>ADD</button>
        </div>
    );
}

export default AddTask;

