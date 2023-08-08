import { YOUR_API_KEY_PINATA, YOUR_API_SECRET_PINATA } from './myconstant';

const pinataSDK = require('@pinata/sdk');

export const getPinanaContents =  async( hash) =>{
    const pinata = new  pinataSDK(YOUR_API_KEY_PINATA, YOUR_API_SECRET_PINATA); 
    try {
       let pinataRes = await pinata.getPinByHash(hash)
       return pinataRes
        
    } catch (error) {
        
        console.log(error)
        return false

    }
}