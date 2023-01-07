import React, { useState } from "react";
import nftImage from "../assets/nftImage.jpg";
import eth from "../assets/icon-ethereum.svg";

const Card = ({ nft }) => {
  const nftdata = nft.metadata ? JSON.parse(nft.metadata) : nft;

  return (
    <div className="flex-col card bg-blue-400 overflow-auto rounded-[15px] drop-shadow-xl p-5 m-5">
      {nftdata.image ? (
        <img src={nftdata.image} className="rounded-xl" />
      ) : (
        <img src={nftImage} className="rounded-xl" />
      )}
      <h1 className="my-5 text-lg font-[700] overflow-y-auto ">
        {nftdata.name}
      </h1>
      <p>{nftdata.description}.</p>
      {nft.price && (
        <div className="flex gap-5 mt-36">
          <img src={eth} alt="eth" height="10px" width="20px" />
          <span className="text-cyan-300 font-bold text-2xl">{nft.price}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
