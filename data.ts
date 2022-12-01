export type TodoItemType = {
  title: string;
  id: string;
  date: string;
};

export const data: TodoItemType[] = [
  {
    title: "This is the first item of todo list",
    id: "1",
    date: "2022-12-01",
  },
  {
    title: "This is the second item of todo list",
    id: "2",
    date: "2022-12-02",
  },
  {
    title: "This is the third item of todo list",
    id: "3",
    date: "2022-12-03",
  },
];
