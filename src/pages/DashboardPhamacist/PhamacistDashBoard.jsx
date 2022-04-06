import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";

import { pharmacistColumns as columns } from "../../services/TableColumn";
import { sampleTickets as data, users } from "../../services/sampleData";
import { useUserContext } from "../../context/userContext";
import Greetings from "../../components/Greetings/Greetings";
import TopBar from "../../components/TopBar/TopBar";
import Select from "react-select";

const PhamacistDashBoard = () => {
  const [cost, setcost] = useState(0);
  const { user } = useUserContext();
  return (
    <>
      <TopBar />

      <div className="mainDashBoard">
        <div className="mainSummaryContainer">
          <Greetings userName={user.name} />

          <div>
            <div className="">
              <form>
              <Select
                id="select_user"
                placeholder="Select Prescriber"
                name="clientId"
                className="myField"
                // onChange={handleSearchChange}
                options={users}
              />
              </form>
            </div>
          </div>

          
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
          <TicketsTable
            columns={columns}
            data={data}
            title="Your Patients Prescriptions Recent Activity"
          />
        </div>
      </div>
    </>
  );
};

export default PhamacistDashBoard;
