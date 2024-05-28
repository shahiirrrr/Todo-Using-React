import React, { useEffect, useState } from 'react';
import './Todo.css';
import ListTask from './ListTask';
import AddTask from './AddTask';

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        document.title = `You have ${tasks.length} pending task(s)`;
    }, [tasks]);

    const addTask = (title) => {
        const newTask = [...tasks, { title, isEditing: false }];
        setTasks(newTask);
    };

    const removeTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
    };

    const editTask = (index, newTitle) => {
        const newTask = [...tasks];
        newTask[index].title = newTitle;
        newTask[index].isEditing = false;
        setTasks(newTask);
    };

    const toggleEdit = (index) => {
        const newTask = [...tasks];
        newTask[index].isEditing = !newTask[index].isEditing;
        setTasks(newTask);
    };

    return (
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
                <AddTask addTask={addTask} />
            </div>
            <div className='tasks'>
                {tasks.map((task, index) => (
                    <ListTask
                        key={index}
                        task={task}
                        index={index}
                        removeTask={removeTask}
                        editTask={editTask}
                        toggleEdit={toggleEdit}
                    />
                ))}
            </div>
        </div>
    );
}

export default Todo;
