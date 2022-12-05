import { useState, useEffect } from "react";
//
import Head from "next/head";
import Image from "next/image";
//
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";
//
import { RootState, store } from "../store/store";
import { useSelector } from "react-redux";

//
import type { TodoItemType } from "../data";
//
import Box from "../src/components/Box";
import TaskCounter from "../src/components/TaskCounter";
import Task from "../src/components/Task";
import ListIcon from "@mui/icons-material/List";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import TaskButton from "../src/components/TaskButton";
import TaskModal from "../src/components/TaskModal";

export default function Home() {
  //Modal state
  const [open, setOpen] = useState(false);
  //Data state
  // const [taskData , setTaskData] = useState<TodoItemType[]|[]>([])

  // Handle modal
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  //Get data
  const todos: TodoItemType[] | any = useSelector<RootState>((state) => state.tasks);

  const remainingTasks: TodoItemType[] = todos.filter((todo:TodoItemType) =>!todo.isComplete)
  const completedTasks: TodoItemType[] = todos.filter((todo:TodoItemType) =>todo.isComplete)


  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A Todo List" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <header className={styles.header}>
          <Image src={logo} alt="logo" height={60} />
          <h1>TODO List</h1>
        </header>

        <Box>
          <TaskCounter
            title="Tasks"
            icon={<ListIcon />}
            counter={remainingTasks.length}
          />
          <div className={styles.seperator} />
          {/* tasks here */}
          {remainingTasks.map((item : TodoItemType) => (
            <Task
              title={item.title}
              date={item.date}
              id={item.id}
              key={item.id}
            />
          ))}
          <TaskButton text="Add A New Task" onClick={handleOpenModal} />
        </Box>
        {completedTasks.length>0 && <Box>
          <TaskCounter
            title="Completed"
            icon={<PlaylistAddCheckIcon />}
            counter={completedTasks.length}
          />
          <div className={styles.seperator} />
          {completedTasks.map((item : TodoItemType) => (
            <Task
              title={item.title}
              date={item.date}
              id={item.id}
              key={item.id}
            />
          ))}
        </Box>}
        {open && (
          <TaskModal
            open
            onCloseModal={handleCloseModal}
            modalType="ADD"
            taskDefaultValue=""
            dateDefaultValue=""
          />
         )}
      </main>
    </div>
  );
}
