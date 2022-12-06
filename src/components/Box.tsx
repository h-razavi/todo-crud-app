import React from "react";
import styles from "../../styles/Box.module.css";

type Props = {
  children: React.ReactNode;
};

function Box({ children }: Props) {
  return <div className={styles.box}>{children}</div>;
}

export default Box;
