import React from "react";
import styles from "../../styles/Task.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

type Props = {
    title : string,
    date : string
};

function Task({title,date}: Props) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        <CalendarMonthIcon /> {date}
      </div>
      <div className={styles.editButtons}>
        <CheckIcon className={styles.check} />
        <EditIcon className={styles.edit} />
        <DeleteIcon className={styles.delete} />
      </div>
    </div>
  );
}

export default Task;
