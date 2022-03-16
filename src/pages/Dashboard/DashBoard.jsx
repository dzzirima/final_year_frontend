import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";
import { TicketColumns as columns } from "../../services/TableColumn";
import { sampleTickets as data } from "../../services/sampleData";
import Greetings from "../../components/Greetings/Greetings";

const DashBoard = () => {
  const [cost, setcost] = useState(0);
  return (
    <div className="mainDashBoard">
      <div className="mainSummaryContainer">
        <Greetings message={"Good Morning"} userName ={"Peter Tosh"}/>
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
        <TicketsTable columns ={columns}  data = {data} title ="Newly Created Medical Records" />
      </div>
    </div>
  );
};

export default DashBoard;
