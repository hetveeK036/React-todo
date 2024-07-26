import React, { useState } from 'react'


const EditTodo = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value , task.id);
        console.log(value);
        setValue('')
    }
  return (
    <form className='todoform' onSubmit={handleSubmit}>
            <h1> Todo - Form </h1>
            <input type='text' className='todo-input' value = {value} placeholder="Uptadeted task ? "
            onChange={ (e) => setValue(e.target.value)}/>
            <button type='submit' className='submit-btn'> update task </button>
    </form>
  )
}

export default EditTodo
