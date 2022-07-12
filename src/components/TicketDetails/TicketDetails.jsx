import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import "./index.css";
import { Button, Card, Divider } from "@mui/material";
import { Box, typography } from "@mui/system";
import Task from "../TicketsComponents/components/Task";
import TaskEdit from "../TicketsComponents/components/TaskEdit";
import AddIcon from "@mui/icons-material/Add";
import HeightMonths from "../Charts/HeightMonths";
import { salesData, salesData2 } from "../Charts/salesData";
import WeightMonths from "../Charts/WeightMonths";
import keyImage from "../../images/key.PNG"

let tasks = [
  {
    id: 1,
    desc: "edhehdededehedhueeudede",
  },
  {
    id: 2,
    desc: "edhehdededehedhueeudede",
  },
  {
    id: 3,
    desc: "edhehdededehedhueeudede",
  },
  {
    id: 4,
    desc: "edhehdededehedhueeudede",
  },
];

const TicketDetails = () => {
  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    // setTasks([
    //   { desc: desc, date: date, id: Date.now(), complete: false },
    //   ...tasks,
    // ]);
  };

  return (
    <div>
      <div className="ticketTitle">
        <Typography variant="h4">
          
          Trent Arnold <span className="ticketNumber">446687</span>
        </Typography>
      </div>
      <div className="ticketCurrentStatus">
        <Typography>Growth And Development Chart </Typography>
      </div>

      <div className=",mainDetailConatiner">
        <div className=",leftContainer">
        
        <HeightMonths data = {salesData} title = "Height Development Chart" grid dataKey = "sales"/>

        <hr/>
        <WeightMonths data = {salesData2} title = "Weight  Development Chart" grid dataKey = "sales"/>
        </div>
        <div className=",rightContainer">
          
          <img src={keyImage} height = "10"></img>
      
        
        </div>
        {/* <HeightMonths data = {salesData} title = "Height Development Chart" grid dataKey = "sales2"/> */}
      </div>
    </div>
  );
};

export default TicketDetails;
