import { Container, Fab, Tooltip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import NewUser from "../../components/newusers/newusers";
import { sampleUsers } from "../../services/sampleData";
import { tableOptions, UserColumns } from "../../services/TableColumn";

import "./index.css";

const Users = () => {
  return (
    <Container className="mainUserContainer">
      <div className="topUserContainer">
        <h1>
        <Tooltip title="Add User" arrow>
  

          
          <Fab   color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          </Tooltip>
        </h1>
      </div>

      <div>
        <div style={{ maxWidth: "100%" }}>
          <MUIDataTable
            title={"User List"}
            data={sampleUsers}
            columns={UserColumns}
            options={tableOptions}
          />
        </div>
      </div>
    </Container>
  );
};

export default Users;
