import React from 'react'
import styles from '../../styles/TaskCounter.module.css'
import ListIcon from '@mui/icons-material/List';
type Props = {}

function TaskCounter({}: Props) {
  return (
    <div className={styles.container}>

        <h4 className={styles.title}><ListIcon />Tasks</h4>
        <div className={styles.badge}>14</div>
    </div>
  )
}

export default TaskCounter