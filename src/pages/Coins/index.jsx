import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const Coins = ({ isConnected, setIsConnected, setAddress }) => {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchCoin.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchCoin(e.target.value);
  };

  const handlePageChange = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= coins.length / 10 &&
      page !== selectedPage
    )
      setPage(selectedPage);
  };

  return (
    <div className="text-black h-screen flex-col">
      <Navbar
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        setAddress={setAddress}
      />
      <h1 className="mt-12 font-semibold text-[25px] md:text-[30px] lg:text-[45px] text-center">
        Popular Coins
      </h1>
      <div className="flex justify-center mt-5">
        <input
          type={"text"}
          placeholder={"Search a Coin"}
          className="w-[60%] h-12 mt-5 rounded-sm text-slate-700 px-10"
          onChange={handleChange}
          value={searchCoin}
        />
        <button
          className={"bg-red-600 px-5 py-3 my-5 text-white font-semibold"}
        >
          🔍 Search
        </button>
      </div>
      {filteredCoins.slice(page * 10 - 10, page * 10).map((coin) => {
        return (
          <div className="w-2/3 mx-auto rounded-xl border border-slate-600 p-4 mb-5 flex justify-between">
            <div className="flex">
              <img src={coin.image} alt="crypto" className="w-16 h-16" />
              <div>
                <div className="flex justify-center ml-10 items-center">
                  <h1 className="text-2xl font-semibold">{coin.name}</h1>
                  <p className="text-sm uppercase mx-3 text-slate-300">
                    ({coin.symbol})
                  </p>
                </div>
                <div>
                  <h5 className="ml-10 mt-2">
                    ${coin.market_cap.toLocaleString()}
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-extrabold mb-2">${coin.current_price}</h2>
              {coin.price_change_percentage_24h < 0 ? (
                <h5 className="text-red-600 font-semibold">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </h5>
              ) : (
                <h5 className="text-green-600 font-semibold">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </h5>
              )}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center pb-6">
        <span
          className={`py-3 px-4 border border-slate-600 cursor-pointer ${
            page === 1 && "collapse"
          }`}
          onClick={() => handlePageChange(page - 1)}
        >
          ◀
        </span>
        {[...Array(coins.length / 10)].map((_, i) => {
          return (
            <span
              className={`py-3 px-4 border border-slate-600 cursor-pointer ${
                page === i + 1 && "bg-red-500 text-white"
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
            page === coins.length / 10 && "collapse"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          ▶
        </span>
      </div>
    </div>
  );
};

export default Coins;
