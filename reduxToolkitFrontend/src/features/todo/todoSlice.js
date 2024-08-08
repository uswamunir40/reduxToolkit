import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, createTodo, updateTodo, removeTodo } from "./thunk.js";

const initialState = {
    loading: false,
    todos: [],
    isEditing: false,
    error: false
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createTodo.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(createTodo.rejected, (state, action) => {
            state.loading = false;
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(createTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos.push(action.payload);
        })

        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            console.log("Error", action.payload);
            state.error = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;


        })
        builder.addCase(updateTodo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateTodo.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        })
        builder.addCase(updateTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        builder.addCase(removeTodo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(removeTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        })
        builder.addCase(removeTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },


    }
})

export default todoSlice.reducer;