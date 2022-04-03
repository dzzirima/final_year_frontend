import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";

import { doctorColumns as columns } from "../../services/TableColumn";
import { sampleTickets as data } from "../../services/sampleData";
import Greetings from "../../components/Greetings/Greetings";
import AddPrescription from "../AddNew/AddPrescription";
import { useUserContext } from "../../context/userContext";
import TopBar from "../../components/TopBar/TopBar";


const DoctorDashBoard = () => {
  const [cost, setcost] = useState(0);
  const{user} = useUserContext()
  return (
    <>
    <TopBar/>
    
    <div className="mainDashBoard">
      <div className="mainSummaryContainer">
      <Greetings  userName ={user.name}/>
      <AddPrescription/>
        <Summary name="Newly Created Records" value={5} />
        <Summary name="Shared with You" value={10} />
        <Summary name="Pending Approve" value={20} />
        
        
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
        <TicketsTable columns={columns}  data = {data}/>
      </div>
    </div>
    </>
  );
};

export default DoctorDashBoard;
