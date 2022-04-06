import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";
import { TicketColumns as columns } from "../../services/TableColumn";
import { sampleTickets as data } from "../../services/sampleData";
import Greetings from "../../components/Greetings/Greetings";
import { useUserContext } from "../../context/userContext";
import TopBar from "../../components/TopBar/TopBar";
import axiosInstance from "../../services/Axios"
import moment from "moment"

const DashBoard = () => {
  const [cost, setcost] = useState(0);
  const [myOptions, setoptions] = useState()
  const{user} = useUserContext()

  useEffect(() => {
    let get_all_user_records = async () => {
      try {
        const getAllUserRecordsResponse = await axiosInstance.post("/records/getAllUserRecords",{
          userId:"6h2ZuwDamb",
          requestor:"6h2ZuwDamb"
      });
 
        let userRecords = getAllUserRecordsResponse.data.data;
        console.log(userRecords)
        
        let customise_user_records = userRecords.map((record) => {

          let myDate = record.collectionDate.hex
         
          var dateObjectName = parseInt(myDate, 16);
          var quantityPrescribed = parseInt(record.quantityPrescribed.hex ,16)

          let mydate =new Date(dateObjectName *1000)
          let formatedDate = moment(mydate, 'YYYY-MM-DD hh:mm:ss a')
          // let actualDate = formatedDate.format('llll')
          let actualDate = formatedDate.fromNow()
        
          
          return({
            ...record,
            myprescribedDate:actualDate,
            myquantityPrescribed:quantityPrescribed
           
          })
        }
         
        );

        setoptions(customise_user_records)

  
      
      } catch (error) {
        console.log(error.message);
      }
    };
    get_all_user_records()   
  }, [])



  return (
    <>
  <TopBar/>

    <div className="mainDashBoard">
      <div className="mainSummaryContainer">
        <Greetings  userName ={user.name}/>
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
        <TicketsTable columns ={columns}  data = {myOptions} title ="Newly Created Medical Records" />
      </div>
    </div>
    </>
  );
};

export default DashBoard;
