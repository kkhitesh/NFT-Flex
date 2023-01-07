import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { getNfts } from "../../utils/getNfts";

const Home = ({ address, isConnected, setIsConnected }) => {
  const [nfts, setNfts] = useState([]);

  console.log(address);

  useEffect(() => {
    getNfts(address, setNfts);
  }, []);

  console.log(nfts);

  return (
    <div className="text-black h-screen flex-col">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      {nfts.length !== 0 ? (
        <div className="flex flex-wrap items-center justify-center mt-10">
          {nfts?.map((nft, index) => (
            <Card key={index} nft={nft} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-3xl font-bold">No NFTs Found</h1>
          <p className="text-lg mt-5">
            Purchase Some NFTs to showcase using NFTFLEX{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
