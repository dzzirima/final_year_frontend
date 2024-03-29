import React, { useEffect, useState } from "react";
import "./index.css";
import { users as options } from "../../services/sampleData";
import axiosInstance  from "../../services/Axios"
import myABI from "../../utils/ABI.json"

import { toast } from "react-toastify";

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Select from "react-select";
import { useUserContext } from "../../context/userContext";

import { createAndUploadJSONFile } from "../../services/upoloadToPinato";
import { CONTRACT_ADDRESS } from "../../utils/myconstant";
import { ethers } from "ethers";
import axios from "axios";
// import { uploadMetaDataToPinata } from "../../services/upoloadToPinato";
function  NewPrescription(){
  const [users, setusers] = useState(options )
  const [formData, setFormData] = useState({});
  const{user} = useUserContext()



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

  // function to check if the user has minted 
  const hasMintedNFT = async (userId) => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);
  
   
        let nftTxn = await connectedContract.hasMintedNFT(userId);
        return nftTxn;
  
      } else {
        console.log("Ethereum object doesn't exist!");
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  // update the user token url

const upDateTokenUrl = async (tokenId , newUrl) => {
  // let newUrl = "https://gateway.pinata.cloud/ipfs/QmfLYfY2Pn6C75wBWQkX1gaEJNq7ZCQLv3aA6TyNB9TQuF"
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);

      let nftTxn = await connectedContract.updateMetadata(tokenId,newUrl);
      return true
    
    } else {
      console.log("Ethereum object doesn't exist!");
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
// get userToken
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


  const handleSearchChange = (e) => {
    setFormData({ ...formData, "patientId": e.value.trim() });
  
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

   let hasMinted =  await hasMintedNFT(formData.patientId)

   if(hasMinted !== true){
   return  toast.error("This Patient has not agreed to terms !!");
   }

   let userTokenId =  await getTokensByUser(formData.patientId)
   const intUserToken  = parseInt(userTokenId[0]);
   let tokenDataUrl = await getTokenUrl(intUserToken)
//doing an http to get the data
let currentNFTData = await axios.get(`${tokenDataUrl}`)

let arrayOfData = currentNFTData.data
console.log("from web")
console.log(arrayOfData)


console.log("from form")
console.log(formData)

let formDataFormated;


if(arrayOfData.length <=0 ){
  // its  the first time someone is doing it
  formDataFormated  = [
    formData
   ]

}else{
  //already there is something in the array
  formDataFormated = [
    formData,
    ...arrayOfData
  ]

}
console.log("addition")
 console.log(formDataFormated)

  let upLoadRes = await createAndUploadJSONFile(formDataFormated)

  let updateURL = await upDateTokenUrl(intUserToken , upLoadRes)

  console.log("Upload from pinata :" +upLoadRes)
  tokenDataUrl = await getTokenUrl(intUserToken)

  console.log("New token Url "+tokenDataUrl)

  
    
  };
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