
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
import axiosInstance from "../../services/Axios";
import moment from "moment";
import GrantAccess from "../../components/AccessControl/GrantAccess/GrantAccess";
import GrantAccessContainer from "../../components/AccessControl/GrandAcessContainer/GrantAccessContainer";
import RevokeAccessContainer from "../../components/AccessControlRevoke/RevokeAcessContainer/RevokeAccessContainer";

const DashBoard = () => {
  const [cost, setcost] = useState(0);
  const [myOptions, setoptions] = useState();
  const { user } = useUserContext();

  useEffect(() => {
    let get_all_user_records = async () => {
      try {
        const getAllUserRecordsResponse = await axiosInstance.post(
          "/records/getAllUserRecords",
          // {
          //   userId: "6h2ZuwDamb",
          //   requestor: "6h2ZuwDamb",
          // }
          {
            userId:user,
            requestor:user.userId
          }

        );
        let userRecords = getAllUserRecordsResponse.data.data.records;
        console.log(userRecords)
        
        setoptions(userRecords);
      } catch (error) {
        console.log(error.message);
      }
    };
    get_all_user_records();
  }, []);

  return (
    <>
      <TopBar />

      <div className="mainDashBoard">
        <div className="mainSummaryContainer">
          <Greetings userName={user.name} />
          <GrantAccessContainer />
          <RevokeAccessContainer />

        
        </div>
        <Divider sx={{ my: 2 }}>
          {" "}
          <Typography variant="subtitle1">
            {" "}
             A Healthy Child is a Happy Child{" "}
           
          </Typography>{" "}
        </Divider>
        <div>
          <TicketsTable
            columns={columns}
            data={myOptions}
            title="Your Records"
          />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
