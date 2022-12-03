import React, {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { addTask } from '../../store/todo-slice';

import type { TodoItemType } from '../../data';
import type {RootState} from '../../store/store'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { store } from '../../store/store';


type Props = {
  open: boolean;
  onCloseModal: ()=>void;
};



function TaskModal({open , onCloseModal}: Props) {
//Creating value states
const [taskValue , setTaskValue] = useState("");
const [dateValue , setDateValue] = useState("")

//Accessing the slice
const todos : TodoItemType[] | any = useSelector<RootState>(state =>state.tasks);
const dispatch = useDispatch();

function handleTaskChange(event:React.ChangeEvent<HTMLInputElement>){
  setTaskValue(event.target.value)
}

function handleDateChange(event:React.ChangeEvent<HTMLInputElement>){
  setDateValue(event.target.value)
}



function handleAddTask(e:any){
  e.preventDefault();
  const newTask = {
    id : todos.length+1,
    title: taskValue,
    date : dateValue,
    isComplete : false
  }
  dispatch(
    addTask({
      task: newTask,
    })
  )
  store.subscribe(()=>{
    localStorage.setItem('todos', JSON.stringify(store.getState()))
  })
  onCloseModal();
}

console.log(store.getState())

  return (
    <div>
      <Dialog open={open} onClose={onCloseModal}  >
        <DialogTitle sx={{backgroundColor:"#0e2030" , fontWeight:"bold"}}>Add A New Task</DialogTitle>
        <DialogContent sx={{backgroundColor:"#0e2030"}}>
          <DialogContentText>
            Add Your Task And Pick A Due Date Below
          </DialogContentText>
          <TextField
            margin="dense"
            id="task"
            label="Task"
            type="text"
            fullWidth
            variant="outlined"
            required
            onChange={handleTaskChange}
          />
            <TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            defaultValue={new Date().toJSON().slice(0, 10)}
            helperText="Pick A Due Date"
            fullWidth
            variant="outlined"
            required
            onChange={handleDateChange}
          />
        </DialogContent>
        <DialogActions sx={{backgroundColor:"#0e2030"}}>
          <Button onClick={onCloseModal} color="error" >Cancel</Button>
          <Button onClick={handleAddTask} color="success">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TaskModal;
