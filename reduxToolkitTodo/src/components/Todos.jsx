import React from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoSlice'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div> 
        Todos
    </div>
    {todos.map((todo)=>(
        <li key={todo.id} 
        className='bg-gray-500 rounded-lg '
        >
            {todo.text}
            <button
            onClick={()=>dispatch(removeTodo(todo.id))}
            className='bg-red-700 p-2 rounded-md m-2 text-white'>X</button>
        </li>
    ))}
    </>
  )
}

export default Todos