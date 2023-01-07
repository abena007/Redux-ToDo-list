import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({list}) => {
  return (
  <div className='ToDoList'>
          { list.map((elm,i)=> <ToDo elm={elm} key={i}></ToDo> )}
      </div>
  )
}

export default ToDoList