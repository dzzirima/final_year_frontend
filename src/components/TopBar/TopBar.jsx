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
import { Tooltip } from "@mui/material";
import { useUserContext } from "../../context/userContext";
// import Balance from "../../Balance/Balance";
// import { axiosInstance } from "../../../services/axios";

const TopBar = () => {
  const { user,logout,login } = useUserContext();
  

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
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            MedAcess ~ Accessible Medical Records
          </Typography>
        </div>

        <div className="topCenterFlex">
          {/* <div className={active === "tickets" ? "topCenterActive" : undefined}>
            <ListItem
              button
              component={Link}
              to="/"
              id="tickets"
              onClick={changeActivePage}
            >
              Records
            </ListItem>
          </div> */}

          {/* <div className={active === "users" ? "topCenterActive" : undefined}>
            <Tooltip title="All Doctors and Phamarcists with access to your Records">
              <ListItem
                button
                component={Link}
                id="users"
                to="/users"
                onClick={changeActivePage}
              >
                Shared Presscribers {user.username}
              </ListItem>
            </Tooltip>
          </div> */}

          <div
            className={active === "settings" ? "topCenterActive" : undefined}
          >
            <ListItem
              button
              id="settings"
              component={Link}
              to="/settings"
              onClick={changeActivePage}
            >
              Login
            </ListItem>
          </div>

          {/* {!user.isGuest && (
            <div className={active === "toadd" ? "topCenterActive" : undefined}>
            <ListItem
              button
              id="toadd"
              component={Link}
              to="/"
              onClick={login}
            >  LOGOUT</ListItem>
          </div>
            
          ) } */}
        </div>

      </div>
    </div>
  );
};

export default TopBar;
