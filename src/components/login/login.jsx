import React, { useState } from "react";
import { Button, Checkbox, Container, FormControlLabel, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";


// import { Redirect } from "react-router-dom";

// // import { axiosInstance, getToken, setToken } from "../../services/axios";
// import { useSnackbar } from "notistack";



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

export default function SignIn({ setLogin}) {
// //   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
//   const classes = useStyles();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await axiosInstance.post("/auth/login", formData);
//       console.log(formData)
//       let token = response.data.data.token
//       console.log(response.data)
//       console.log(token)

//     if(response && token){
//       setLogin(true);
//       setToken(token);
//       enqueueSnackbar('Welcome To Kamili Investiments',{variant: "success"});
//     }else{
      
//       enqueueSnackbar('Check Your credentials',{variant: "warning"});

//     }
      
//     } catch (error) {
      
//       console.log(error.message)
//       enqueueSnackbar(`${error.message}`,{variant: "error"});

      
//     }
    
   
//   };

  return (
      
        <>
          <Container component="main" maxWidth="xs">
            <div >
              
              <form >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={handleChange}
                  fullWidth
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
                  </Grid>
                  <Grid item>
                    {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
    
            </Box>
          </Container>
        </>
    
  );
}