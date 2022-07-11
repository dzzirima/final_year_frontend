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
import "./index.css";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useUserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/Axios";

const GrantAccess = ({ options, title }) => {
  const { user } = useUserContext();
  const [formData, setFormData] = useState({});

  const handleSearchChange = (e) => {
    setFormData({ accessor: e.value.trim() });
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

    //**check if you can remove acess from your self */
    if (
      formData.accessor == undefined ||
      user.userId == "" ||
      formData.accessor == user.userId
    ) {
      toast.error("Error while Granting access , you need to log in....");
      return;
    }

    try {
      let response = await axiosInstance.post("/accessors/grantAccess", {
        ...formData,
        userId: user.userId,
      });
      if (response) {
        let success = response.data.success;
        console.log(response.data);

        if (success === true) {
          toast.success("Accessor Successfully added....");
        } else {
          toast.error("Error in adding accessor ......");
          toast.info(`${response.data.message}`);
        }
        // check
      }
    } catch (error) {
      toast.error(`${error.message}`, { variant: "error" });
    }
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="success"
        endIcon={<PersonAddIcon />}
      >
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`${title} Access`} </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div className="selectMaincontainer">
              <Select
                id="select_user"
                placeholder="Select Staff"
                name="clientId"
                className="myField"
                onChange={handleSearchChange}
                options={options}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default GrantAccess;
