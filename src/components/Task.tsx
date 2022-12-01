import React from "react";
import styles from "../../styles/Task.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    title : string,
    date : string
};

function Task({title,date}: Props) {
  return (
    <div className={styles.container}>
        <span>{title}</span>
      <div className={styles.date}>
        <CalendarMonthIcon /> {date}
      </div>
      <div className={styles.editButtons}>
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Task;
