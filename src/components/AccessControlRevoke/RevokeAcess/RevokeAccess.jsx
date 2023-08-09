import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import './index.css'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useUserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/Axios"
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../../../utils/myconstant";
import myABI from "../../../utils/ABI.json"
import { useEffect } from "react";


const RevokeAcess = ({options ,title}) => {
  const{user} = useUserContext()
  const [formData, setFormData] = useState({});
  const [currentAccount, setCurrentAccount] = useState("");

  const revokeAccesss = async (accessorAddress) => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);
  
   
        let nftTxn = await connectedContract.removeAccessor(accessorAddress);
        return true;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      
      console.log(error)
      return false;
    }
  }
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
  
    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }
  
    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });
  
    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
    
  }
  


  const handleSearchChange = (e) => {

    setFormData({"accessorToBeRemoved": e.value.trim() });
    
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      console.log("current Account"+currentAccount)
      console.log( formData.accessorToBeRemoved )

      let removeAccessRes = await revokeAccesss(formData.accessorToBeRemoved)

      console.log(removeAccessRes)

      if(removeAccessRes ==true){
        toast.success(" accesor removed succeffully ");
       
      }else{
        toast.error("Error while removing the accessor");

      }
      
    } catch (error) {
      toast.error("Error while Granting access , you need to log in....");
    }

  };
  useEffect(() => {

    checkIfWalletIsConnected()
   }, [])
   


  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained"  color ="error" endIcon ={<PersonRemoveIcon/>}>{title}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`${title} Access`} </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div className = "selectMaincontainer">
            <Select
              id="select_user"
              placeholder="Select Prescriber"
              name="clientId"
              className="myField"
              onChange={handleSearchChange}
              options={options}
            />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default RevokeAcess;
