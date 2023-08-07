const axios = require('axios');
const FormData = require('form-data');


export const uploadMetaDataToPinata = () => {
    
// Define your Pinata API credentials
 const apiKey = "9aa1b79bee1371c026bf";
 const apiSecret =
   "5e7745dcd32d4610efc64d42ce5877e482d5ac119d9dbd44144c6b28c19c5a4e";
   
   // Define the content of the JSON file
const jsonData = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

// Convert the JSON data to a string
const jsonString = JSON.stringify(jsonData);

// Define your Pinata API credentials


// Define the Pinata API endpoint for file uploading
const pinataUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

// Create a FormData object and append the file content
const formData = new FormData();
formData.append('file', Buffer.from(jsonString), { filename: 'data.json' });

// Set the headers for authentication and content type
const headers = {
  ...formData.getHeaders(),
  pinata_api_key: apiKey,
  pinata_secret_api_key: apiSecret
};

// Make a POST request to Pinata API to upload the file
axios.post(pinataUrl, formData, { headers })
  .then(response => {
    const { data } = response;
    if (data.IpfsHash) {
      console.log('File uploaded successfully to Pinata!');
      console.log('IPFS hash:', data.IpfsHash);
    } else {
      console.log('File upload failed. Error:', data.error);
    }
  })
  .catch(error => {
    console.log('Error occurred:', error.response.data);
  });

}


  