import { createSlice } from "@reduxjs/toolkit";
import { TodoItemType } from "../data";

const initialState:TodoItemType[] = []

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers :{
        addTask(state,action){
            state.push(action.payload);
        },
        deleteTask(state,action){
            state.filter((item,i)=> i!==action.payload.index)
        }
    }
})

export const {addTask , deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;

