import React, { useState } from "react";
import Card from "../../components/Card";
import { Nfts } from "../../data/nftData";
import Navbar from "../../components/Navbar";

const NFTs = ({ isConnected, setIsConnected, setAddress }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Nfts.length / 8 &&
      page !== selectedPage
    )
      setPage(selectedPage);
  };

  return (
    <div className="text-black h-screen flex-col">
      <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />
      <div className="flex flex-wrap items-center justify-center mt-10">
        {Nfts.slice(page * 8 - 8, page * 8).map((nft, index) => (
          <Card key={index} nft={nft} />
        ))}
      </div>
      <div className="flex justify-center pb-6">
        <span
          className={`py-3 px-4 border border-slate-600 cursor-pointer ${
            page === 1 && "collapse"
          }`}
          onClick={() => handlePageChange(page - 1)}
        >
          ◀
        </span>
        {[...Array(Nfts.length / 8)].map((_, i) => {
          return (
            <span
              className={`py-3 px-4 border border-slate-600 cursor-pointer ${
                page === i + 1 && "bg-red -500 text-white"
              }`}
              onClick={() => handlePageChange(i + 1)}
              key={i}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          className={`py-3 px-4 border border-slate-600 cursor-pointer ${
            page === Nfts.length / 8 && "collapse"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          ▶
        </span>
      </div>
    </div>
  );
};

export default NFTs;
