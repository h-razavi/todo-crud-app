import React from "react";
import styles from "../../styles/Button.module.css";

type Props = {
  text: string;
  onClick: () => void;
};

function TaskButton({ text, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default TaskButton;
