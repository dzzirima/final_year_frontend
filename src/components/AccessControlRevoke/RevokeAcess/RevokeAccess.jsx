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
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useUserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/Axios"


const RevokeAcess = ({options ,title}) => {
  const{user} = useUserContext()
  const [formData, setFormData] = useState({});

  const handleSearchChange = (e) => {

    setFormData({"accessorToBeRemoved": e.value.trim() });
    
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


    return toast.success("Accessor succefully removed ...");
    if (
      formData.accessorToBeRemoved == undefined ||
      user.userId == "" ||
      formData.accessorToBeRemoved == user.userId
    ) {
      toast.error("Error while Granting access , you need to log in....");
      return;
    }
    


    try {
      let response = await axiosInstance.post("/accessors/revokeAccess", {
        ...formData,
        userId: user.userId,
      });
      if (response) {
        let success = response.data.success;
        console.log(response.data);

        if (success === true) {
          toast.success("Accessor succefully removed ...");
        } else {
          toast.error("Error in removing the accessor ");
          toast.info(`${response.data.message}`);
        }
        // check
      }
    } catch (error) {
      toast.error(`${error.message}`, { variant: "error" });
    }

    //**check if you can remove acess from your self */
    if(formData.accessorToBeRemoved == undefined ||user.userId == '' || formData.accessor == user.userId){
      toast.error("Error while Granting access , you need to log in....")
      return;
    } 
    console.log(formData.accessorToBeRemoved)
    console.log({...formData ,userId:user.userId});
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained"  color ="error" endIcon ={<PersonRemoveIcon/>}>{title}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`${title} Access`} </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div className = "selectMaincontainer">
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
            <Button onClick={handleClose} color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default RevokeAcess;
