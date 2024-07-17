import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'hello'}]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    //The reducers created here will be used for updating or changing values in our store.
    reducers: {
        //We will always have access to 2 parameters, state and action inside our reducers. State will give us the information about the initial values of our variables. Action will provide us with the values that are needed for some specific operation.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
                //text to be added is coming from action
            }
            state.todos.push(todo)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer
//This is all just syntax