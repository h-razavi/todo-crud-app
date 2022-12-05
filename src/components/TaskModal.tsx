import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../store/todo-slice";

import type { TodoItemType } from "../../data";
import type { RootState } from "../../store/store";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  open: boolean;
  onCloseModal: () => void;
  modalType: "ADD" | "EDIT";
  taskDefaultValue: string;
  dateDefaultValue: string;
  taskID?: number;
};

function TaskModal({
  open,
  modalType,
  taskDefaultValue,
  dateDefaultValue,
  taskID,
  onCloseModal,
}: Props) {
  //Creating value states
  const [taskValue, setTaskValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  //Accessing the slice
  const todos: TodoItemType[] | any = useSelector<RootState>(
    (state) => state.tasks
  );
  const dispatch = useDispatch();

  //Accessing entered values
  function handleTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskValue(event.target.value);
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDateValue(event.target.value);
  }

  //Operations
  function handleAddTask() {
    const newTask = {
      id: todos.length + 1,
      title: taskValue,
      date: dateValue,
      isComplete: false,
    };
    dispatch(addTask(newTask));
    onCloseModal();
  }

  function handleEditTask() {
    dispatch(
      editTask({
        title: taskValue ? taskValue : taskDefaultValue,
        date: dateValue ? dateValue : dateDefaultValue,
        id: taskID,
      })
    );
    onCloseModal();
  }

  return (
    <div>
      <Dialog open={open} onClose={onCloseModal}>
        <DialogTitle sx={{ backgroundColor: "#0e2030", fontWeight: "bold" }}>
          {modalType === "ADD" ? "Add A New Task" : "Edit Task"}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#0e2030" }}>
          <DialogContentText>
            {modalType === "ADD"
              ? "Add A Title And Due Date For Your Task"
              : "Change Task Title or Date"}
          </DialogContentText>
          <TextField
            margin="dense"
            id="task"
            label="Task"
            type="text"
            defaultValue={taskDefaultValue}
            fullWidth
            variant="outlined"
            required
            onChange={handleTaskChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            defaultValue={dateDefaultValue}
            helperText="Pick A Due Date"
            fullWidth
            variant="outlined"
            required
            onChange={handleDateChange}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#0e2030" }}>
          <Button onClick={onCloseModal} color="error">
            Cancel
          </Button>
          <Button
            onClick={modalType === "ADD" ? handleAddTask : handleEditTask}
            color="success"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TaskModal;
