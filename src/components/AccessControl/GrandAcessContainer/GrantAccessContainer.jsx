

import { Box } from "@mui/system";
import { Paper } from "@mui/material";

import { useTime } from "../../../CustomeHooks/useGeetings";
import GrantAccess from "../GrantAccess/GrantAccess";

import { useEffect, useState } from "react";
import axiosInstance from "../../../services/Axios"

export default function GrantAccessContainer({ message, userName }) {
  const time = useTime();

  const [users, setusers] = useState()

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
    
      
      } catch (error) {
        console.log(error.message);
      }
    };
    get_all_users();   
  }, [])
  
  return (
    <Paper>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 1,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary" ,mb:1}}>
          Share Your Prescription With:
        </Box>

        <Box sx={{ color: "", fontSize: 28, fontWeight: "medium" }}>
          <div>
          <GrantAccess options={users} title={"Grant"} />
          </div>
        </Box>

        <Box
          sx={{
            color: "",
            display: "inline",
            fontWeight: "medium",
            mx: 0.5,
          }}
        >
           

        
         
        </Box>
      </Box>
    </Paper>
  );
}
