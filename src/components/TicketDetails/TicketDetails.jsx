import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import "./index.css";
import { Button, Card, Divider } from "@mui/material";
import { Box, typography } from "@mui/system";
import Task from "../TicketsComponents/components/Task";
import TaskEdit from "../TicketsComponents/components/TaskEdit";
import AddIcon from "@mui/icons-material/Add";

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
          
          Printer Not Working <span className="ticketNumber">TK446687</span>
        </Typography>
      </div>
      <div className="ticketCurrentStatus">
        <Typography> Nyasha Mashumba Opened This on:22/09/2021 </Typography>
      </div>

      <div className="mainDetailConatiner">
        <div className="leftContainer">
          <div>
            <div>
              <button
                variant="contained"
                className = "addCommentButton"
                onClick={() => setShowTaskEdit(!showTaskEdit)}
              >
                {!showTaskEdit && " New Comment"}
                {showTaskEdit && "Close"}
              </button>
            </div>
            {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
          </div>
          <div className="scrollable">
            <div className="messagesContainer">
              {tasks.map((task) => (
                <div key={task.id}>
                  <Task task={task} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <Divider>
            <Typography variant="subtitle1"> Ticket Details</Typography>
          </Divider>
          <div className="ticketItemContainer">
            <div className="ticketItemTitle">
              <Typography variant>Date</Typography>
            </div>
            <Box sx={{ m: 2 }}></Box> <Typography>11/01/2021</Typography>
          </div>
          <div className="ticketItemContainer">
            <div className="ticketItemTitle">
              <Typography variant>Ticket Number</Typography>
            </div>
            <Box sx={{ m: 2 }}></Box> <Typography>TT55YU89</Typography>
          </div>
          <div className="ticketItemContainer">
            <div className="ticketItemTitle">
              <Typography variant>Status</Typography>
            </div>
            <Box sx={{ m: 2 }}></Box> <Typography>Pending</Typography>
          </div>
          <div className="ticketItemContainer">
            <div className="ticketItemTitle">
              <Typography variant>Priority</Typography>
            </div>
            <Box sx={{ m: 2 }}></Box> <Typography>High</Typography>
          </div>
          <div className="ticketItemContainer">
            <div className="ticketItemTitle">
              <Typography variant>Subject</Typography>
            </div>
            <Box sx={{ m: 2 }}></Box>
            <Typography>Internet Not working</Typography>
          </div>
          <div className="ticketItemContainer">
            
              <div className="ticketItemTitle">
                <Typography variant>Description</Typography>
              </div>
            
            <Box sx={{ m: 2 }}></Box>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              numquam culpa repellendus alias odio explicabo ipsam et? Voluptate
              modi, optio vero quas tenetur reprehenderit odio rerum non maxime
              corporis sint.
            </Typography>
          </div>
          <div className="ticketItemContainer">
            <div className="ticketItemTitle">
              <Typography variant>Assigned To</Typography>
            </div>
            <Box sx={{ m: 2 }}></Box> <Typography>Nyasha</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
