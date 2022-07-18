import { useTodo } from './hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

// const items = localStorage.getItem('todos')
// const initalState = items ? JSON.parse(items) : []


export const TodoApp = () => {

  const {handleNewTodo, deleteTodo, onToggleId, todos, todosCount, pendingTodosCount} = useTodo()

  return (
    <>
      <h1>Todo App: {todosCount} <small>pendientes: {pendingTodosCount()}</small></h1>
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
