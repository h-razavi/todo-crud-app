import React, { useState } from "react";
import styles from "../../styles/Task.module.css";
import { TodoItemType } from "../../data";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch } from "react-redux";
import { deleteTask,  markComplete } from "../../store/todo-slice";
import TaskModal from "./TaskModal";

type Props = TodoItemType;

function Task({ title, date, id , isComplete }: Props) {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  //Delete Tasks
  function handleDeleteTasks() {
    dispatch(deleteTask({ id }));
  }

  //Complete Tasks
  function handleCompleteTasks() {
    dispatch(markComplete({ id }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <CalendarMonthIcon /> {date}
      </div>
      <div className={styles.editButtons}>
        <button className={styles.check} onClick={handleCompleteTasks} disabled={isComplete} >
          <CheckIcon />
        </button>
        <button
          className={styles.edit}
          onClick={() => {
            setOpenEdit(true);
          }}
          disabled={isComplete}
        >
          <EditIcon />
        </button>

        <button className={styles.delete} onClick={handleDeleteTasks}>
          <DeleteIcon />
        </button>
      </div>
      <TaskModal
        open={openEdit}
        modalType="EDIT"
        taskDefaultValue={title}
        dateDefaultValue={date}
        onCloseModal={() => setOpenEdit(false)}
        taskID={id}
      />
    </div>
  );
}

export default Task;
