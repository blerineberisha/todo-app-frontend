import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { DialogTitle } from '@mui/material';
import '../styles/TaskCreationDialog.scss'

export default function TaskCreationDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add task
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle className='dialog_title'>Add a new task</DialogTitle>
        <DialogContent className='dialog_content'>
          <TextField
            className='hello'
            margin="dense"
            id="name"
            label="Task name"
            type="text"
            fullWidth
            variant="outlined"
            
          />
          <TextField
          id="outlined-multiline-static"
          margin='dense'
          label="Description"
          multiline
          fullWidth
          rows={3}
        />
        </DialogContent>
        <DialogActions className='button_group'>
          <Button onClick={handleClose} variant='outlined' sx={{color: '#49B093', borderColor: '#49B093'}} className='buttons'>Cancel</Button>
          <Button onClick={handleClose} variant='outlined' sx={{backgroundColor: '#49B093', borderColor: '#49B093', color: 'white'}} className='buttons'>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}