import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todo-slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: { tasks: loadTodos() },
});

//LocalStorage
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().tasks));
});

function loadTodos() {
  try {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      console.log(savedTodos);
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  } catch (err) {
    return undefined;
  }
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
