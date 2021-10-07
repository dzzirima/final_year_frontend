import React, { useEffect, useState } from "react";
import "./Topbar.css";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import logo from "../../images/logo.PNG";

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
// import Balance from "../../Balance/Balance";
// import { axiosInstance } from "../../../services/axios";

const TopBar = () => {
  let refresher;
  const [active, setActivePage] = useState(false);
  const [update_balance, setupdate_balance] = useState(0);
  const [balance, setbalance] = useState({});
  const changeActivePage = (e) => {
    let id = e.target.id;
    setActivePage(id);
  };

 
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className = "logoimg">
          <span>{<img src={logo} />} </span>
          </div>
          
          <div className = "logotext">
            <span>icedTechnologies</span>
          </div>
        </div>

        <div className="topCenterFlex">
          <div className={active === "tickets" ? "topCenterActive" : undefined}>
            <ListItem
              button
            //   component={Link}
              to="/tickets"
              id="tickets"
              onClick={changeActivePage}
            >
              TICKETS
            </ListItem>
          </div>

          <div
            className={active === "users" ? "topCenterActive" : undefined}
          >
            <ListItem
              button
            //   component={Link}
              id="users"
              to="/users"
              onClick={changeActivePage}
            >
              USERS
            </ListItem>
          </div>

          <div className={active === "settings" ? "topCenterActive" : undefined}>
            <ListItem
              button
              id="settings"
            //   component={Link}
              to="/settings"
              onClick={changeActivePage}
            >
              SETTINGS
            </ListItem>
          </div>

          <div className={active === "toadd" ? "topCenterActive" : undefined}>
            <ListItem
              button
              id="toadd"
            //   component={Link}
              to="/toadd"
              onClick={changeActivePage}
            >
              MORE
            </ListItem>
          </div>
        </div>
        

        {/* <div className="topRight">
        
          <div className="topbarIcons">
          
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <Avatar>KL</Avatar>
            </IconButton>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;