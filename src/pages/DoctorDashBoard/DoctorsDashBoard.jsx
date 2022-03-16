import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";

const DoctorDashBoard = () => {
  const [cost, setcost] = useState(0);
  return (
    <div className="mainDashBoard">
      <div className="mainSummaryContainer">
      <Summary name="Good Morning Doctor Ganja" />
        <Summary name="Newly Created Records" value={5} />
        <Summary name="Shared Records" value={10} />
        <Summary name="Not Shared Records" value={20} />
        <Summary name="Total" value={35} />
      </div>
      <Divider sx={{ my: 2 }}>
        {" "}
        <Typography variant="subtitle1">
          {" "}
          <SecurityIcon color="primary" /> Share Medical Records Securely {" "}
          <SecurityIcon color="primary" />{" "}
        </Typography>{" "}
      </Divider>
      <div>
        <TicketsTable />
      </div>
    </div>
  );
};

export default DoctorDashBoard;
