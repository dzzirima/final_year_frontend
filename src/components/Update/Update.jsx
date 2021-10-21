import React, { useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./index.css";

import { FormControl, IconButton, MenuItem } from "@material-ui/core";
import { Select, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

const Update = ({status}) => {
  const [Tstatus, setstatus] = useState(status);

  const handleChange = (event) => {
    setstatus(event.target.value);
  };

  const notify = () => toast("Status Updated  Successfully !!!!");

  return (


    <FormControl>
      <div className="mainUpDateConatiner">
        <div className="statusContainer">
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Tstatus}
            label="UpDate"
            onChange={handleChange}
          >
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="inprogress">In Progress</MenuItem>
            <MenuItem value="resolved">Resolved</MenuItem>
          </Select>
        </div>
        <div>
        {/* <Box sx={{ width: 0.2 }} /> */}
        <Tooltip title="Update Status" arrow>
          <IconButton color="primary" aria-label="add an alarm" onClick = {notify}>
            <UpdateIcon />
          </IconButton>
        </Tooltip>
        </div>
      </div>
      <ToastContainer />
    </FormControl>

  );
};

export default Update;
