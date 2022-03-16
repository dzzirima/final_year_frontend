import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import './index.css'

const users = [
  { value: "John", label: "John" },
  { value: "Praise", label: "Praise" },
  { value: "Nyasha", label: "Nyasha" },
  { value: "Munya", label: "Munya" },
];

const AssingTech = () => {
  const [formData, setFormData] = useState({});

  const handleSearchChange = (e) => {
    setFormData({ ...formData, [e.id]: e.value.trim() });
    console.log(formData);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Share With</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Share With Prescriber</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div className = "selectMaincontainer">
            <Select
              id="select_user"
              placeholder="Select Prescriber"
              name="clientId"
              className="myField"
              onChange={handleSearchChange}
              options={users}
            />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AssingTech;
