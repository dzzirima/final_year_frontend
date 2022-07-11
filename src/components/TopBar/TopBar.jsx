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
  const { user, logout, login } = useUserContext();

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
            Electronic Baby   Medical Card
          </Typography>
        </div>

        <div className="topCenterFlex">
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

        </div>
      </div>
    </div>
  );
};

export default TopBar;
