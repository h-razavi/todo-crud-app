import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
  open: boolean;
  onCloseModal: ()=>void;
};



function TaskModal({open , onCloseModal}: Props) {
const today = new Date()
console.log(today.toLocaleDateString())

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
          />
            <TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            defaultValue={today.toLocaleDateString()}
            helperText="Pick A Due Date"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions sx={{backgroundColor:"#0e2030"}}>
          <Button onClick={onCloseModal} color="error" >Cancel</Button>
          <Button onClick={onCloseModal} color="success">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TaskModal;
