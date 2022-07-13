
export const todoReducer = (intialState, action) => {
  switch (action.type) {
    case 'add':
      return [...intialState, action.payload] 
    case 'delete':
      const newTodos = intialState.filter((todo)=>{
        return todo.id !== action.payload
      }) 
      return newTodos
    default:
      break;
  }    
}
