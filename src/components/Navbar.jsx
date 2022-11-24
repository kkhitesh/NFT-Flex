import React from "react";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";

const Navbar = ({ connectWallet, isConnected, setIsConnected }) => {
  const handleLogout = () => {
    setIsConnected(false);
    toast.success("Logged out Succesfully");
  };

  return (
    <nav className="flex justify-between mx-10 h-42">
      <div className="flex">
        <img src={logo} className="w-40 py-5" />
        {isConnected && (
          <ol className="flex items-center mt-2">
            <li className="text-2xl px-10">Home</li>
            <li className="text-2xl">Explore</li>
          </ol>
        )}
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
