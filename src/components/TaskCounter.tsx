import React from 'react'
import styles from '../../styles/TaskCounter.module.css'

type Props = {
    title : string
    icon : React.ReactElement,
    counter: number
}

function TaskCounter({title ,icon , counter}: Props) {
  return (
    <div className={styles.container}>

        <h4 className={styles.title}>{icon}{title}</h4>
        <div className={styles.badge}>{counter}</div>
    </div>
  )
}

export default TaskCounter