import React, { useState } from "react";
import nftImage from "../assets/nftImage.jpg";

const Card = ({ nft }) => {
  const nftdata = JSON.parse(nft.metadata);

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
    </div>
  );
};

export default Card;
