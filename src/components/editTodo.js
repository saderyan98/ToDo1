import React, {useState, useEffect} from 'react'

export const EditTodoForm = ({EditTodo, task}) => {
    const [value, setValue] = useState(task.task)

    
    const handleSubmit = event => {
        event.preventDefault();

            EditTodo(value, task.id
                
                );

            setValue("");
    }


return (
    <form id="todo-form" className='todo-form' onSubmit={handleSubmit}>
    <input type="text" className='todo-input' 
    value= {value}
    placeholder='Update task' onChange={(event) => 
    setValue(event.target.value)}>
    </input>
    <button type="submit" className='todo-btn'>Update task</button>
    </form>
)
}