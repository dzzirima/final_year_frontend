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
import { users as myUsers  } from "../../services/sampleData";
import moment from "moment";
import { CONTRACT_ADDRESS } from "../../utils/myconstant";
import myABI from "../../utils/ABI.json"
import { ethers } from "ethers";
import axios from "axios";
import NFTCard from "../../components/NFTCard/NFTCards";

const PhamacistDashBoard = () => {
 
  const { user } = useUserContext();
  const [formData, setFormData] = useState({});
  const [users, setusers] = useState(myUsers);
  const [myOptions, setoptions] = useState();
  const [currentAccount, setCurrentAccount] = useState("");
  const [nftData, setNftData] = useState([]);

  const getTokensByUser = async (userId) => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);
        let nftTxn = await connectedContract.getTokensByUser(userId);
        return nftTxn
      } else {
        console.log("Ethereum object doesn't exist!");
        return false;
      }
    } catch (error) {
      console.log(error)
      return false;
    }
  }
  const getTokenUrl = async (tokenId) => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);
  
        let nftTxn = await connectedContract.tokenURI(tokenId);
      
        return nftTxn
      
      } else {
        console.log("Ethereum object doesn't exist!");
        return false
      }
    } catch (error) {
      console.log(error)
      return false
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
    setFormData({ userId: e.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /** some basic checks if someone is looged in */

setNftData([])


    // return console.log(formData ,currentAccount)
    try{
      let userTokenId =  await getTokensByUser(formData.userId)
      const intUserToken  = parseInt(userTokenId[0]);
      let tokenDataUrl = await getTokenUrl(intUserToken)
  
      var pathname = new URL(tokenDataUrl).pathname;
  
  let currentNFTData = await axios.get(pathname)
  let arrayOfData = currentNFTData.data
  
  setNftData(arrayOfData)
 
    } catch (error) {
      console.log(error)
      toast.info("Unfortunately you dont have access to this users medical")
      console.log(error.message);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected()
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
        <div className="prenatalCard">
          
            {nftData.map((item, index) => (
              <div key={index}> <NFTCard nft = {item}/></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PhamacistDashBoard;
