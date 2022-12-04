import { useState, useEffect } from "react";
//
import Head from "next/head";
import Image from "next/image";
//
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";
//
import { RootState, store } from "../store/store";
import { useSelector, useDispatch } from "react-redux";

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
  const [isEditing, setIsEditing] = useState(false);
  //Data state
  // const [taskData , setTaskData] = useState<TodoItemType[]|[]>([])

  // Handle modal
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setIsEditing(false);
  };

  //Get data
  const todos: TodoItemType[] = useSelector<RootState>((state) => state.tasks);

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
            counter={todos.length}
          />
          <div className={styles.seperator} />
          {/* tasks here */}
          {todos.map((item) => (
            <Task title={item.title} date={item.date} id={item.id} />
          ))}
          <TaskButton text="Add A New Task" onClick={handleOpenModal} />
        </Box>
        <Box>
          <TaskCounter
            title="Completed"
            icon={<PlaylistAddCheckIcon />}
            counter={0}
          />
          <div className={styles.seperator} />
        </Box>
        {open && (
          <TaskModal
            open
            onCloseModal={handleCloseModal}
            modalTitle={isEditing ? "Edit Task" : "Add A New Task"}
            modalDescription={
              isEditing
                ? "Edit Your Task Details"
                : "Add A Title And Due Date For Your Task"
            }
          />
        )}
      </main>
    </div>
  );
}
