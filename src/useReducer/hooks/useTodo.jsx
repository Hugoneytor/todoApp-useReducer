import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

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

  const todosCount = todos.length

  const pendingTodosCount = () => {
    return todos.filter((todo)=>{
      return !todo.done
    }).length
  }

  return {
    handleNewTodo,
    deleteTodo,
    onToggleId,
    todos,
    todosCount,
    pendingTodosCount
  }
}
