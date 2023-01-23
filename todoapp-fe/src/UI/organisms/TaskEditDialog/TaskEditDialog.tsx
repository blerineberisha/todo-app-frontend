import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { DialogTitle } from '@mui/material';
import './TaskEditDialog.scss'

export default function TaskEditDialog() {
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
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle className='dialog_title'>Edit task</DialogTitle>
        <DialogContent className='dialog_content'>
          <TextField
            className='title'
            margin="dense"
            id="name"
            label="Task name"
            type="text"
            fullWidth
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-multiline-static"
            margin='dense'
            label="Description"
            multiline
            fullWidth
            rows={3}
          ></TextField>
        </DialogContent>
        <DialogActions className='button_group'>
          <Button onClick={handleClose} variant='outlined' className='buttons' id="cancelButton">Cancel</Button>
          <Button onClick={handleClose} variant='outlined' className='buttons' id="addButton">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}