import './nftlogin.css';
import { ethers } from "ethers";
import myABI from "../../utils/ABI.json"


import twitterLogo from '../../assets/twitter-logo.svg';
import React, { useEffect, useState } from "react";
import NFTCard from '../NFTCard/NFTCards';

// Constants
const TWITTER_HANDLE = 'blackmhofu';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;
const CONTRACT_ADDRESS = "0xa8Bb9F8eD5284c5D11952ceAc73FEF7A15fB340d";

const NFTLogin = () => {
  /*
  * Just a state variable we use to store our user's public wallet. Don't forget to import useState.
  */
  const [currentAccount, setCurrentAccount] = useState("");

// method to check if we are connected to the window.ethereum

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

// also check if were are on correct chain
const checkIfOnCorrectChain = async () =>{
  let chainId = await window.ethereum.request({ method: 'eth_chainId' });
console.log("Connected to chain " + chainId);

// String, hex code of the chainId of the Goerli test network
const goerliChainId = "0xaa36a7"; 
if (chainId !== goerliChainId) {
	alert("You are not connected to the Sepolia Test Network!");
}
}


/*
  * Implement your connectWallet method here
  */
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

//method to mint 
const askContractToMintNft = async () => {
  
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);

      connectedContract.on("NewNFTMinted", (from, tokenId) => {
        console.log(from, tokenId.toNumber())
        alert(`Hey there! We've minted your NFT. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: <https://testnets.opensea.io/assets/goerli/${CONTRACT_ADDRESS}/${tokenId.toNumber()}>`)
      });

      console.log("Going to pop wallet now to pay gas...")
      let nftTxn = await connectedContract.mintNFT(currentAccount,"this is the url");

      console.log("Mining...please wait.")
      await nftTxn.wait();
      
      console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
  }
}
// check if the user has already minted
const hasMintedNFT = async () => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);

 
      let nftTxn = await connectedContract.hasMintedNFT();

      console.log("Mining...please wait.")
  
      console.log(nftTxn)
      
      console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
  }
}
// function to get all the tokens by the user
const getTokensByUser = async () => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);

 
      let nftTxn = await connectedContract.getTokensByUser();

      console.log("Mining...please wait.")
  
      console.log(nftTxn)
      
      console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
  }
}
// get All user Tokens
const getTokenUrl = async () => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);

      let nftTxn = await connectedContract.tokenURI(1);
      console.log(nftTxn)
    
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
  }
}

// get All user Tokens
const upDateTokenUrl = async () => {

  // pass token id
  //take new data
  // take old data 
  //create new data
  //upload to ipfs
  // get the hash
  // updata the token 
  let newUrl = "https://gateway.pinata.cloud/ipfs/QmfLYfY2Pn6C75wBWQkX1gaEJNq7ZCQLv3aA6TyNB9TQuF"
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myABI.abi, signer);

      let nftTxn = await connectedContract.updateMetadata(1,newUrl);
      console.log(nftTxn)
    
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error)
  }
}

  // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected() 
    checkIfOnCorrectChain()
  }, [])
  

  return (
<div className="NFTLogin">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My Prenatal NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Own  your Prenatal data today.
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <>
           
            <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
              Agree To Terms And Conditions
            </button>

            <button onClick={hasMintedNFT} >
              check if minted 
            </button>

            <button onClick={getTokensByUser}>
              get User tokens
            </button>

            <button onClick={getTokenUrl}>
              get User tokens
            </button>

            <button onClick={upDateTokenUrl}>
             update URL
            </button>

            </>


          )}
        
        </div>

        {
          currentAccount ==="" ? (
            <>
            <h1> No NFTs yet </h1>
            </>
          ) : (
            // <div className='prenatalCard'>
            // <NFTCard/>
            // <NFTCard/>
            // <NFTCard/>
            // <NFTCard/>
            // <NFTCard/>
            // <NFTCard/>
            // <NFTCard/>
            // <NFTCard/>
            // </div>
            // history.push("/patient")
             <div></div>
          )
        }
       

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default NFTLogin;
