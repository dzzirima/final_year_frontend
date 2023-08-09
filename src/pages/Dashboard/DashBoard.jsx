import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Summary from "../../components/Summary/Summary";
import TicketsTable from "../../components/TicketsTable/TicketsTable";
import "./index.css";
import SecurityIcon from "@mui/icons-material/Security";
import Greetings from "../../components/Greetings/Greetings";
import { useUserContext } from "../../context/userContext";
import TopBar from "../../components/TopBar/TopBar";

import moment from "moment";
import GrantAccess from "../../components/AccessControl/GrantAccess/GrantAccess";
import GrantAccessContainer from "../../components/AccessControl/GrandAcessContainer/GrantAccessContainer";
import RevokeAccessContainer from "../../components/AccessControlRevoke/RevokeAcessContainer/RevokeAccessContainer";
import { ethers } from "ethers";
import myABI from "../../utils/ABI.json"
import { CONTRACT_ADDRESS, preserveReplaceLast } from "../../utils/myconstant";
import NFTCard from "../../components/NFTCard/NFTCards";
import axios from "axios";

const DashBoard = () => {
  const [cost, setcost] = useState(0);
  const [nftData, setNftData] = useState([]);
  const { user } = useUserContext();
  const [currentAccount, setCurrentAccount] = useState("");

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
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
  
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
  
      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error);
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

   // function to get all the tokens by the user
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

  useEffect(() => {
    let get_user_token_id_and_token_metadata = async () => {
      try {

        if(currentAccount !== ''){
          let userTokenId =  await getTokensByUser(currentAccount)
          const intUserToken  = parseInt(userTokenId[0]);
          let tokenDataUrl = await getTokenUrl(intUserToken)
          let currentNFTData = await axios.get(`${tokenDataUrl}`)
          let arrayOfData = currentNFTData.data
          setNftData(arrayOfData)
        }


        // setoptions(customise_user_records);
      } catch (error) {
        console.log(error.message);
      }
    };
    // get_all_user_records();
    checkIfWalletIsConnected() ;
    get_user_token_id_and_token_metadata()
  }, [currentAccount]);

  return (
    <>
      <TopBar />

      <div className="mainDashBoard">
        <div className="mainSummaryContainer">
          <Greetings userName={preserveReplaceLast(currentAccount)} />
          <GrantAccessContainer />
          <RevokeAccessContainer />

          <Summary name="Total" value={35} />
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

export default DashBoard;
