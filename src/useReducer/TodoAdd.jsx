import React, { useState } from 'react'

export const TodoAdd = ({ onNewTodo }) => {

  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(input.length <= 1) return ;

    const newTodo = {
      id: new Date().getTime(),
      description : input,
      done: false
    }
    onNewTodo(newTodo)
    setInput('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        onChange={handleInputChange}
        value={input}/>
      <button 
        type="submit"
        className="btn btn-outline-primary mt-2 w-100">
          Agregar
      </button>
    </form>
  )
}
