import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

// const items = localStorage.getItem('todos')
// const initalState = items ? JSON.parse(items) : []

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch(action)
  }

  const deleteTodo = (id)=>{
    const action = {
      type: 'delete',
      payload: id
    };
    dispatch(action);
  }

  const onToggleId = (id) => {
    const action = {
      type: 'toggle',
      payload: id
    }
    dispatch(action)
  }

  return (
    <>
      <h1>Todo App: 10 <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/*TODO list*/}
          <TodoList todos={todos} deleteTodo={deleteTodo} onToggleId={onToggleId}/>
          {/*TODO list*/}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/*TODOADD*/}
          <TodoAdd onNewTodo={handleNewTodo}/>
          {/*TODOADD*/}
        </div>
      </div>

    </>
  )
}
