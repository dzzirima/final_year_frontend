const axios = require('axios');
const FormData = require('form-data');

    
// Define your Pinata API credentials
 const apiKey = "9aa1b79bee1371c026bf";
 const apiSecret =
   "5e7745dcd32d4610efc64d42ce5877e482d5ac119d9dbd44144c6b28c19c5a4e";
   


    export const createAndUploadJSONFile = async (myData) => {
    // Define the content of the JSON file
    const jsonData = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com'
    };

    
  
    // Convert the JSON data to a string
    const jsonString = JSON.stringify(myData);
  
    // Create a Blob object from the JSON string
    const blob = new Blob([jsonString], { type: 'application/json' });
  
    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append('file', blob, 'data.json');
  

  
    // Define the Pinata API endpoint for file uploading
    const pinataUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
  
    // Set the headers for authentication and content type
    const headers = {
      'Content-Type': 'multipart/form-data',
      pinata_api_key: apiKey,
      pinata_secret_api_key: apiSecret
    };
  
    try {
      // Make a POST request to Pinata API to upload the file
      const response = await axios.post(pinataUrl, formData, { headers });
      const { data } = response;
      
      if (data.IpfsHash) {
        console.log('File uploaded successfully to Pinata!');
        console.log('IPFS hash:', data.IpfsHash);
        let url = 'https://gateway.pinata.cloud/ipfs/'+data.IpfsHash
        // console.log(url)
        return  url
      } else {
        console.log('File upload failed. Error:', data.error);
        return false;
      }
    } catch (error) {
      console.log('Error occurred:', error.response.data);
      return false;
    }
  };
  