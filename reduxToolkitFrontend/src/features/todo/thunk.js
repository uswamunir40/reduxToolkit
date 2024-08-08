import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios.js";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await axiosInstance.get("/todos");
    return response.data.data;
});

export const createTodo = createAsyncThunk('createTodo', async (text) => {
    try {
        const response = await axiosInstance.post("/todo", { text });
        return response.data.todo;
    } catch (error) {
        console.error("Error creating todo:", error);
        throw error;
    }
});

export const updateTodo = createAsyncThunk('updateTodo', async ({ id, text }) => {
    try {
        const response = await axiosInstance.put(`/todo/${id}`, { text });
        return response.data.todo;
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    }
});

export const removeTodo = createAsyncThunk('removeTodo', async ({ id }) => {
    try {
        const response = await axiosInstance.delete(`/todo/${id}`);
        return response.data.todo.id;
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error;
    }
});
