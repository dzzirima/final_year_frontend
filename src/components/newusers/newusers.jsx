import React, { useState } from "react";
import "./newusers.css";

//import { axiosInstance } from "../../../services/axios";
import { toast } from "react-toastify";

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import axiosInstance from "../../services/Axios"
function  NewUser(){


  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
     
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  //  return  console.log(formData)
    try {
      let response = await axiosInstance.post("/auth/register", formData);
      let {success, message} = response.data
      if (success) {
        toast.success(`${message}`)

      }else{
        toast.error(`${message}`, {
          variant: "fail",
        });

      }
    } catch (error) {
      toast.error(`${error.message}`, { variant: "error" });
    }
  };

  return (
    <div className="newUser">
      {/* <h1 className="newUserTitle">New User</h1> */}
      <form action="" className="newUserform" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <TextField
            variant="outlined"
            label="Email address"
            name="email"
            required
            fullWidth
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <div className="newUserPassword">
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              required
              
              // fullWidth
            ></TextField>

            <TextField
              variant="outlined"
              label="Repeat Password"
              name="password"
            onChange={handleChange}
              // fullWidth
            ></TextField>
          </div>
        </div>

        <div className="newUserItem">
          <div className="newUserPassword">
            <TextField
              variant="outlined"
              label="Name"
              name="firstname"
              required
            onChange={handleChange}
              // fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="lastname"
              label="Surname"
             onChange={handleChange}
              // fullWidth
            ></TextField>
          </div>
        </div>

        <div className="newUserItem">
          {/* <label htmlFor=""> Phone (+263 785 5214)</label> */}
          <TextField
            variant="outlined"
            type="tel"
            autoComplete="false"
            onChange={handleChange}
            label="Phone"
            name="phone"
          ></TextField>
        </div>
        <div className="newUserItem">
          {/* <label htmlFor=""> Address </label> */}
          <TextField
            type="text"
            variant="outlined"
            label="Address"
            name="address"
            onChange={handleChange}
          ></TextField>
        </div>
        <div className="newUserItem">
          <FormControl component="fieldset">
            <FormLabel component="legend">User Role</FormLabel>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <FormControlLabel
                value="doctor"
                control={<Radio />}
                label="doctor"
              />
              <FormControlLabel
                value="patient"
                control={<Radio />}
                label="patient"
              />
              <FormControlLabel
                value="phamacist"
                control={<Radio />}
                label="pharmacist"
              />
            
            </RadioGroup>
          </FormControl>
        </div>

        <div className="newUserItem">
          <div className="userButton">
            <Button variant="contained" color="primary" type="submit">
              Create User
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;