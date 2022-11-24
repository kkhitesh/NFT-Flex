import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { getNfts } from "../../utils/getNfts";

const Home = ({ address, isConnected, setIsConnected }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    getNfts(address, setNfts);
  }, []);

  console.log(nfts);

  return (
    <div className="text-black h-screen flex-col">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <div className="flex flex-wrap items-center justify-center mt-10">
        {nfts?.map((nft, index) => (
          <Card key={index} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default Home;
