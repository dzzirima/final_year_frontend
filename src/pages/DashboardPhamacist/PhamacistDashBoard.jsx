import { Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import axiosInstance from "../../services/Axios";
import { toast } from "react-toastify";
import moment from "moment";

const PhamacistDashBoard = () => {
  const [cost, setcost] = useState(0);
  const { user } = useUserContext();
  const [formData, setFormData] = useState({});
  const [users, setusers] = useState();
  const [myOptions, setoptions] = useState();

  const handleSearchChange = (e) => {
    setFormData({ userId: e.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /** some basic checks if someone is looged in */

    if (formData.userId == undefined || user.userId == "") {
      toast.error(
        "Login to your account to view Patients records Or Select the Patient to view"
      );
      return;
    }

    try {
      const getAllUserRecordsResponse = await axiosInstance.post(
        "/records/getAllUserRecords",
        {
          userId:"6h2ZuwDamb",
          requestor:"6h2ZuwDamb"
        }
        // {
        //   userId: formData.userId,
        //   requestor: user.userId,
        // }
      );

      let userRecords = getAllUserRecordsResponse.data.data;
      

      let customise_user_records = userRecords.map((record) => {
        let myDate = record.collectionDate.hex;

        var dateObjectName = parseInt(myDate, 16);
        var quantityPrescribed = parseInt(record.quantityPrescribed.hex, 16);

        let mydate = new Date(dateObjectName * 1000);
        let formatedDate = moment(mydate, "YYYY-MM-DD hh:mm:ss a");
        // let actualDate = formatedDate.format('llll')
        let actualDate = formatedDate.fromNow();

        return {
          ...record,
          myprescribedDate: actualDate,
          myquantityPrescribed: quantityPrescribed,
        };
      });
      console.log(customise_user_records)
      setoptions(customise_user_records);
    } catch (error) {
      console.log(error)
      toast.info("Unfortunately you dont have access to this users medical")
      console.log(error.message);
    }
  };

  useEffect(() => {
    let get_all_users = async () => {
      try {
        const getAllUsersResponse = await axiosInstance.get(
          "/auth/getAllUsers"
        );
        let users = getAllUsersResponse.data.data;

        let customised_users = users.map((user) => {
          let roleInit = "PNT";

          if (user.role === "doctor") {
            roleInit = "DR";
          }
          if (user.role === "phamacist") {
            roleInit = "PMCY";
          }

          return {
            value: user.Id,
            label: `${roleInit} ` + " " + user.lastname + " " + user.firstname,
          };
        });

        setusers(customised_users);
      } catch (error) {
        console.log(error.message);
      }
    };
    get_all_users();
  }, []);

  return (
    <>
      <TopBar />

      <div className="mainDashBoard">
        <div className="mainSummaryContainer">
          <Greetings userName={user.name} />

          <div className="chooseUserContainer">
            <form className="innerFormContainer" onSubmit={handleSubmit}>
              <Select
                id="select_user"
                placeholder="Search Patient"
                name="clientId"
                className="SelectField"
                onChange={handleSearchChange}
                options={users}
              />

              <Button
                type="submit"
                sx={{ mx: 1 }}
                variant="contained"
                endIcon={<SearchIcon />}
              >
                {" "}
                View Records
              </Button>
            </form>
          </div>
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
            data={myOptions}
            title="Your Patients Prescriptions Recent Activity"
          />
        </div>
      </div>
    </>
  );
};

export default PhamacistDashBoard;
