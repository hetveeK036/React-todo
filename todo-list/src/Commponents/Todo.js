import React from 'react'
// import FontAwesomeIcon from 'font-awesome';

const Todo = ({task, toggleComplete, editTodo, deleteTodo}) => {
  return (
    <div className='todo-item'>
      <div className='task'>

            <p className={`${task.completed ? 'completed' : ""}`} 
            onClick={ () => toggleComplete(task.id) }>
              {task.task} </p>
      </div>
            <div className='todo-btn'>
                {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
                <button onClick={() => editTodo(task.id)}>Edit</button>
                <button onClick={() => deleteTodo(task.id)}>Delete</button>
            </div>
    </div>
  )
}

export default Todo
