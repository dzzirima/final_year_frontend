import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import axiosInstance from "../../services/Axios.js"


const DoctorDashBoard = () => {
  const [cost, setcost] = useState(0);
  const{user} = useUserContext()
  const [users, setusers] = useState()

  useEffect(() => {
    let get_all_users = async () => {
      try {
        const getAllUsersResponse = await axiosInstance.get("/auth/getAllUsers");
        let users = getAllUsersResponse.data.data.users;
      
       
        
      setusers(users)
      console.log(users)
      
      } catch (error) {
        console.log(error.message);
      }
    };
    get_all_users();   
  }, [])

  return (
    <>
    <TopBar/>
    
    <div className="mainDashBoard">
      <div className="mainSummaryContainer">
      <Greetings  userName ={user.name}/>
      <AddPrescription/>
        
        
        
      </div>
      <Divider sx={{ my: 2 }}>
        {" "}
        <Typography variant="subtitle1">
          {" "}
       
           A Healthy Child Is A Happy Child {" "}
          
        </Typography>{" "}
      </Divider>
      <div>
        <TicketsTable columns={columns}  data = {users}/>
      </div>
    </div>
    </>
  );
};

export default DoctorDashBoard;
