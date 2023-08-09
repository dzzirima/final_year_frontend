

import { Box } from "@mui/system";
import { Paper } from "@mui/material";

import { useTime } from "../../../CustomeHooks/useGeetings";
import GrantAccess from "../GrantAccess/GrantAccess";

import { useEffect, useState } from "react";
import axiosInstance from "../../../services/Axios"
import { sampleUsers  } from "../../../services/sampleData";
import { users as myUsers  } from "../../../services/sampleData";


export default function GrantAccessContainer({ message, userName }) {
  const time = useTime();

  const [users, setusers] = useState(myUsers)
  
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

        <Box sx={{ color: "text.primary", fontSize: 28, fontWeight: "medium" }}>
          <div>
          <GrantAccess options={users} title={"Grant"} />
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
           

        
         
        </Box>
      </Box>
    </Paper>
  );
}
