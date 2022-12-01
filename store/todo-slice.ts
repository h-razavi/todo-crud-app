import { createSlice } from "@reduxjs/toolkit";
import { TodoItemType } from "../data";

const initialState:TodoItemType[] = []

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers :{
        add(state,action){
            state.push(action.payload);
        },
        delete(state,action){
            state.filter((item,i)=> i!==action.payload.index)
        }
    }
})

