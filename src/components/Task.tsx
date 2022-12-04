import React from "react";
import styles from "../../styles/Task.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../store/todo-slice";

type Props = {
  title: string;
  date: string;
  id: number;
};

function Task({ title, date, id }: Props) {
  const dispatch = useDispatch();

  //Delete Tasks
  function handleDeleteTasks() {
    dispatch(deleteTask({ id }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <CalendarMonthIcon /> {date}
      </div>
      <div className={styles.editButtons}>
        <button className={styles.check}>
          <CheckIcon />
        </button>
        <button className={styles.edit}>
          <EditIcon />
        </button>
        <button className={styles.delete} type="button" onClick={handleDeleteTasks} >
          <DeleteIcon  />
        </button>
      </div>
    </div>
  );
}

export default Task;
