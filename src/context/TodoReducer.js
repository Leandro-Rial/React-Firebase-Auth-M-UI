import { types } from "../types/types";

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case types.addTodo:
            
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        
        case types.removeTodo:
            
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.payload)
            }
        
        case types.editTodo:
            
            const updateTodo = action.payload;

            const updateTodos = state.todos.map(todo => {
                if(todo.id === updateTodo.id) {
                    return updateTodo;
                }

                return todo
            })

            return {
                ...state,
                todos: updateTodos
            }
    
        default:
            return state;
    }
}