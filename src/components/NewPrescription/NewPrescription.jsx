import React, { useState } from "react";
import "./index.css";
import { users as options } from "../../services/sampleData";
import axiosInstance  from "../../services/Axios"

import { toast } from "react-toastify";

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Select from "react-select";
function  NewPrescription(){

  const [formData, setFormData] = useState({});

  const handleSearchChange = (e) => {
    setFormData({ ...formData, "patientId": e.value.trim() });
  
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
   console.log(formData)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    return console.log(formData)
    try {
      let response = await axiosInstance.post("records/createRecord", formData);
      if (response) {
        let success = response.data.success;
        console.log(response.data);
        if (success === true) {
          toast.success("User Creation was successful", {
            variant: "success",
          });
        } else {
          toast.error("User creation Failed:User Already Exist", {
            variant: "warning",
          });
        }
        // check
      }
    } catch (error) {
      toast.error(`${error.message}`, { variant: "error" });
    }
  };

  return (
    <div className="newUser">
      {/* <h1 className="newUserTitle">New User</h1> */}
      <form action="" className="newUserform" onSubmit = {handleSubmit}>
        <div className="newUserItem">
          <TextField
            variant="outlined"
            label="Drug Description"
            name="drugdescription"
            required
            fullWidth
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          {/* <label htmlFor=""> Phone (+263 785 5214)</label> */}
          <TextField
            variant="outlined"
            type="tel"
            autoComplete="false"
            onChange={handleChange}
            label="Quantity Prescribed"
            name="quantity"
          ></TextField>
        </div>
        <div className="newUserItem">
        <div className = "selectMaincontainer">
            <Select
              id="select_user"
              placeholder="Select Patient"
              name="clientId"
              className="myField"
              onChange={handleSearchChange}
              options={options}
            />
            </div>
        </div>
        
        <div className="newUserItem">
          <div className="userButton">
            <Button variant="contained" color="primary" type="submit">
              Create Prescription
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPrescription;