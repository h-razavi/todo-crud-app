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
           return state.filter((task)=> task.id!==action.payload.id)
        },
        editTask(state,action){
            return state.map(task=>task.id===action.payload.id?action.payload : task)          
        },
        markComplete(state,action){
            return state.map((task)=>task.id===action.payload.id?{...task,isComplete : true}:task)
        }
    }
})

export const {addTask , deleteTask , editTask , markComplete} = tasksSlice.actions;
export default tasksSlice.reducer;

