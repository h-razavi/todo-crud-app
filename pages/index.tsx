import { useState } from "react";
//
import Head from "next/head";
import Image from "next/image";
//
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";
//
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

//
import type { TodoItemType } from "../typing";
//
import Box from "../src/components/Box";
import TaskHeader from "../src/components/TaskHeader";
import Task from "../src/components/Task";
import ListIcon from "@mui/icons-material/List";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import TaskButton from "../src/components/TaskButton";
import TaskModal from "../src/components/TaskModal";

export default function Home() {
  //Modal state
  const [open, setOpen] = useState(false);

  // Handle modal operations
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  //Get data
  const todos: TodoItemType[] | any = useSelector<RootState>(
    (state) => state.tasks
  );

  const remainingTasks: TodoItemType[] = todos.filter(
    (todo: TodoItemType) => !todo.isComplete
  );
  const completedTasks: TodoItemType[] = todos.filter(
    (todo: TodoItemType) => todo.isComplete
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A Simple CRUD Todo List App" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <header className={styles.header}>
          <Image src={logo} alt="logo" height={60} />
          <h1>TODO List</h1>
        </header>

        <Box>
          <TaskHeader
            title="Tasks"
            icon={<ListIcon />}
            counter={remainingTasks.length}
          />

          <div className={styles.seperator} />

          {remainingTasks.map((item: TodoItemType) => (
            <Task
              title={item.title}
              date={item.date}
              id={item.id}
              isComplete={item.isComplete}
              key={item.id}
            />
          ))}

          <TaskButton text="Add A New Task" onClick={handleOpenModal} />
        </Box>


        {completedTasks.length > 0 && (
          <Box>

            <TaskHeader
              title="Completed"
              icon={<PlaylistAddCheckIcon />}
              counter={completedTasks.length}
            />

            <div className={styles.seperator} />

            {completedTasks.map((item: TodoItemType) => (
              <Task
                title={item.title}
                date={item.date}
                id={item.id}
                isComplete={item.isComplete}
                key={item.id}
              />
            ))}

          </Box>
        )}

        
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
