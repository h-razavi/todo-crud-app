import React from "react";
import styles from "../../styles/Task.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {};

function Task({}: Props) {
  return (
    <div className={styles.container}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Task 1" />
      </FormGroup>
      <div className={styles.date}>
        <CalendarMonthIcon /> 2022-12-03
      </div>
      <div className={styles.editButtons}>
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Task;
