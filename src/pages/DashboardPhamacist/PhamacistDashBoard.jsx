import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";

import { pharmacistColumns as columns } from "../../services/TableColumn";
import { sampleTickets as data } from "../../services/sampleData";

const PhamacistDashBoard = () => {
  const [cost, setcost] = useState(0);
  return (
    <div className="mainDashBoard">
      <div className="mainSummaryContainer">
      <Summary name="Hie Phamacist Gafa" value={35} />
        <Summary name="Newly Created Records" value={5} />
        <Summary name="Shared Records" value={10} />
        <Summary name="Not Shared Records" value={20} />
        <Summary name="Total" value={35} />
      </div>
      <Divider sx={{ my: 2 }}>
        {" "}
        <Typography variant="subtitle1">
          {" "}
          <SecurityIcon color="primary" /> Secure your Medical Records{" "}
          <SecurityIcon color="primary" />{" "}
        </Typography>{" "}
      </Divider>
      <div>
        <TicketsTable columns={columns}  data ={data} title ="Your Patients Prescriptions Recent Activity"/>
      </div>
    </div>
  );
};

export default PhamacistDashBoard;
