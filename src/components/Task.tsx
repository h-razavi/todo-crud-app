import React, { useState } from "react";
import styles from "../../styles/Task.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask , markComplete } from "../../store/todo-slice";
import TaskModal from "./TaskModal";

type Props = {
  title: string;
  date: string;
  id: number;
};

function Task({ title, date, id }: Props) {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  //Delete Tasks
  function handleDeleteTasks() {
    dispatch(deleteTask({ id }));
  }

  //Complete Tasks
  function handleCompleteTasks(){
    dispatch(markComplete({id}))
  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <CalendarMonthIcon /> {date}
      </div>
      <div className={styles.editButtons}>
        <button className={styles.check} onClick={handleCompleteTasks} >
          <CheckIcon />
        </button>
        <button className={styles.edit} onClick={()=>{setOpenEdit(true)}}>
          <EditIcon />
        </button>
        <button className={styles.delete} onClick={handleDeleteTasks}>
          <DeleteIcon />
        </button>
      </div>
      {openEdit && <TaskModal
        open = {openEdit}
        modalType = "EDIT"
        taskDefaultValue={title}
        dateDefaultValue={date}
        onCloseModal={() => setOpenEdit(false)}  
      />}
    </div>
  );
}

export default Task;
