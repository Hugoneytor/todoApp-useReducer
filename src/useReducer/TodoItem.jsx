import React from 'react'

export const TodoItem = ( {description, deleteTodo, id} ) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{description}</span>
      <button className="btn btn-danger" onClick={()=>deleteTodo(id)}>Borrar</button>
    </li>
  )
}
