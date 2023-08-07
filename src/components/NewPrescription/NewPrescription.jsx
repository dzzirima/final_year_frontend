import React, { useEffect, useState } from "react";
import "./index.css";
import { users as options } from "../../services/sampleData";
import axiosInstance  from "../../services/Axios"

import { toast } from "react-toastify";

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Select from "react-select";
import { useUserContext } from "../../context/userContext";
function  NewPrescription(){
  const [users, setusers] = useState(options )
  const [formData, setFormData] = useState({});
  const{user} = useUserContext()


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
      let response = await axiosInstance.post("/records/createRecord", {...formData ,doctorId:user.userId});
      if (response) {
        let success = response.data.success;
        console.log(response.data);
        
        if (success === true) {
          toast.success("Prescription was successful created")
        } else {
          toast.error("Prescription creation Failed");
          toast.info(`${response.data.message}`)
        }
        // check
      }
    } catch (error) {
      toast.error(`${error.message}`, { variant: "error" });
    }
  };


  useEffect(() => {
    let get_all_users = async () => {
      try {
        const getAllUsersResponse = await axiosInstance.get("/auth/getAllUsers");
        let users = getAllUsersResponse.data.data;
      
        let customised_users = users.map((user) => {
          let roleInit = "PNT"

          if (user.role === "doctor"){
            roleInit = "DR"
          }
          if (user.role === "phamacist"){
            roleInit = "PMCY"
          }


          return({
            value:user.Id,
            label :`${roleInit} `+" "+ user.lastname +" "+user.firstname
           
          })
        }
         
        );
        
      setusers(customised_users)
      console.log(customised_users)
      
      } catch (error) {
        console.log(error.message);
      }
    };
    get_all_users();   
  }, [])
  

  return (
    <div className="newUser">
      {/* <h1 className="newUserTitle">New User</h1> */}
      <form action="" className="newUserform" onSubmit = {handleSubmit}>
        <div className="newUserItem">
          <TextField
            variant="outlined"
            label="Drug Description"
            name="drugDescription"
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
            name="quantityPrescribed"
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
              options={users}
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