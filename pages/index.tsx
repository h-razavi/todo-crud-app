import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";
import Box from "../src/components/Box";
import TaskCounter from "../src/components/TaskCounter";
import Task from "../src/components/Task";
import ListIcon from '@mui/icons-material/List';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import TaskButton from "../src/components/TaskButton";
import { data } from "../data";
import TaskModal from "../src/components/TaskModal";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A Todo List" />
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
          <TaskCounter title="Tasks" icon={<ListIcon />} counter={data.length} />
         <div className={styles.seperator} />
            {/* tasks here */}
            {data.map(item=><Task title={item.title} date={item.date} />)}
          <TaskButton text="Add A New Task" />
        </Box>
        <Box>
          <TaskCounter title="Completed" icon={<PlaylistAddCheckIcon />} counter={0} />
          <div className={styles.seperator} />
        </Box>
        <TaskModal />
      </main>
    </div>
  );
}
