import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Tooltip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NewUser from "../../components/newusers/newusers";
import { sampleUsers } from "../../services/sampleData";
import { tableOptions, UserColumns } from "../../services/TableColumn";

import "./index.css";
import NewPrescription from "../../components/NewPrescription/NewPrescription";

const AddPrescription = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  return (
    <Container className="mainUserContainer">
      <div className="topUserContainer">
        <h1>
        <Tooltip title="Add  New Prescription" arrow>
          <Fab   onClick = {handleClickOpen} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          </Tooltip>
        </h1>
      </div>

      {/* popup the adding user form */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Create New PreScription</DialogTitle>
          <DialogContent>
              <NewPrescription/>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        
      </Dialog>



    </Container>
  );
};

export default AddPrescription;
