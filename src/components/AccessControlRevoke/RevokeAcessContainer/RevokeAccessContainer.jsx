
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { useTime } from "../../../CustomeHooks/useGeetings";
import RevokeAccess from "../RevokeAcess/RevokeAccess";
import { useEffect, useState } from "react";
import axiosInstance from "../../../services/Axios"

export default function RevokeAccessContainer({ message, userName }) {
  const time = useTime();
  const [users, setusers] = useState()

  useEffect(() => {
    let get_all_users = async () => {
      try {
        const getAllUsersResponse = await axiosInstance.get("/auth/getAllUsers");
        let users = getAllUsersResponse.data.data.users;
      
        let customised_users = users.map((user) => {
          let roleInit = "PNT"

          if (user.role === "doctor"){
            roleInit = "DR"
          }
          if (user.role === "phamacist"){
            roleInit = "PMCY"
          }


          return({
            value:user._id,
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
        <Box sx={{ color: "text.secondary" , mb :1 }}>
        Remove Access To :
        </Box>

        <Box sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}>
          <div>
            <RevokeAccess options={users} title={"Revoke"} />
          </div>
        </Box>

        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "medium",
            mx: 0.5,
          }}
        >
          {/* <EmojiPeopleIcon color="primary" /> */}
        </Box>
      </Box>
    </Paper>
  );
}
