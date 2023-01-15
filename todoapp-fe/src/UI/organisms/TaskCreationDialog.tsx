import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { DialogTitle, ThemeProvider } from "@mui/material";
import "../styles/TaskCreationDialog.scss";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { TaskCreation } from "../../models/TaskCreationDialog.model";
import theme from "../Theme";

const TaskCreationDialog = () => {
  const [open, setOpen] = useState(false);
  const initialValues: TaskCreation = { name: "", description: "" };

  const taskCreationSchema = yup.object().shape({
    name: yup.string().min(1).max(40).required("Please enter a name"),
    description: yup
      .string()
      .min(1)
      .max(200)
      .required("Please enter a description"),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskCreationSchema}
      onSubmit={(values) => {
        console.log(values, "initialvalues");
      }}
    >
      {(props: FormikProps<TaskCreation>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
        } = props;
        return (
          <ThemeProvider theme={theme}>
            <Form>
              <Button variant="contained" onClick={handleClickOpen}>
                Add task
              </Button>
              <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle className="dialog_title">
                  Add a new task
                </DialogTitle>
                <DialogContent className="dialog_content">
                  <TextField
                    margin="dense"
                    id="name"
                    label="Task name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                    error={errors.name && touched.name ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <TextField
                    id="description"
                    margin="dense"
                    label="Description"
                    multiline
                    fullWidth
                    rows={3}
                    helperText={
                      errors.description && touched.description
                        ? errors.description
                        : null
                    }
                    error={
                      errors.description && touched.description ? true : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </DialogContent>
                <DialogActions className="button_group">
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    className="buttons"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    className="buttons"
                    type="submit"
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </Form>
          </ThemeProvider>
        );
      }}
    </Formik>
  );
};

export default TaskCreationDialog;
