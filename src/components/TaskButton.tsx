import React from 'react';
import styles from '../../styles/Button.module.css'
import Button from '@mui/material/Button';

type Props = {
    text : string
}

function TaskButton({text}: Props) {
  return (
    <button className={styles.button}>
        {text}
    </button>
  )
}

export default TaskButton;