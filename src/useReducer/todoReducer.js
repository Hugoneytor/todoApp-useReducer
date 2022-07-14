
export const todoReducer = (intialState, action) => {
  switch (action.type) {
    case 'add':
      return [...intialState, action.payload] 
    case 'delete':
      const newTodos = intialState.filter((todo)=>{
        return todo.id !== action.payload
      }) 
      return newTodos
    case 'toggle':
      return intialState.map(todo=>{
        if(todo.id === action.payload){
          return{
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
    default:
      break;
  }    
}
