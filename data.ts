export type TodoItemType = {
  id: number;
  title: string;
  date: string;
  isComplete: boolean;
};

export const data: TodoItemType[] = [
  {
    id: 1,
    title: "This is the first item of todo list",
    date: "2022-12-01",
    isComplete: false,
  }
];
