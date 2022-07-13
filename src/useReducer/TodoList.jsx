import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ( {todos, deleteTodo} ) => {
  return (
    <ul className="list-group">
      {
        todos.map( todo => {
          //TODO ITEM
          return <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo}/> 
        })
      }
    </ul>
  )
}
