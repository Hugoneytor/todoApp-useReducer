import React from 'react'

export const TodoItem = ( {description, deleteTodo, id, onToggleId, done} ) => {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className={done ? "text-decoration-line-through" : null} onClick={()=>onToggleId(id)}>{description}</span>
      <button className="btn btn-danger" onClick={()=>deleteTodo(id)}>Borrar</button>
    </li>
  )
}
