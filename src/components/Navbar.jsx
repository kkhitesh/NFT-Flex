import React from "react";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ connectWallet, isConnected, setIsConnected }) => {
  const nav = useNavigate();

  const handleLogout = () => {
    setIsConnected(false);
    toast.success("Logged out Succesfully");
  };

  return (
    <nav className="flex justify-between mx-10 h-42">
      <div className="flex">
        <Link to="/">
          <img src={logo} className="w-40 py-5" />
        </Link>
        {isConnected && (
          <ol className="flex items-center mt-2">
            <Link to="/">
              <li className="text-2xl px-10">Home</li>
            </Link>
            <Link to="/explore">
              <li className="text-2xl">Explore</li>
            </Link>
          </ol>
        )}
        <ol className="flex items-center mt-2">
          <Link to="/coins">
            <li className="text-2xl px-10">Coins</li>
          </Link>
          <li className="text-2xl ">NFTs</li>
        </ol>
      </div>
      <button
        className="bg-red-600 px-5 py-3 my-5 text-white font-semibold"
        onClick={isConnected ? handleLogout : connectWallet}
      >
        {isConnected ? "Log Out" : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
