import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);
        console.log(value);
        setValue('')
    }
  return (
    <form className='todoform' onSubmit={handleSubmit}>
            <h1> Todo - Form </h1>
            <input type='text' className='todo-input' value = {value} placeholder="What's is task ? "
            onChange={ (e) => setValue(e.target.value)}/>
            <button type='submit' className='submit-btn'> Submit </button>
    </form>
  )
}

export default TodoForm
