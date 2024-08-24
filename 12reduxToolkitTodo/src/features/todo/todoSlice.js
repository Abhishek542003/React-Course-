import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>
            {
                const todo = 
                {
                    id:nanoid(),
                    text:action.payload
                }

                state.todos.push(todo);
            },
        removeTodo:(state,actions)=>
            {
                state.todos = state.todos.filter((todo)=>actions.payload!==todo.id)
            }
    }
});

export const {addTodo,removeTodo} = todoSlice.actions   // for components 

export default todoSlice.reducer //for store file 