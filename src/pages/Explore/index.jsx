import React, { useState } from "react";
import { ethers } from "ethers";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import { getNfts } from "../../utils/getNfts";
import Card from "../../components/Card";

const Explore = ({ isConnected, setIsConnected }) => {
  const [address, setAddress] = useState("");
  const [nfts, setNfts] = useState([]);

  if (!isConnected) {
    toast.error("Please connect your wallet first");
  }

  const getNFTsfromAddress = () => {
    if (!ethers.utils.isAddress(address)) {
      setAddress("");
      toast.error("Invalid Address");
    } else {
      getNfts(address, setNfts);
    }
  };

  return (
    <div>
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <div className="flex justify-center mt-5">
        <input
          type={"text"}
          placeholder={"Enter Wallet Address"}
          className="w-[60%] h-12 mt-5 rounded-sm text-slate-700 px-10"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className={"bg-red-600 px-5 py-3 my-5 text-white font-semibold"}
          onClick={getNFTsfromAddress}
        >
          🔍 Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {nfts?.map((nft, index) => (
          <Card key={index} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
