import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import home from "../../assets/home.png";
import explore from "../../assets/explore.png";

const Login = ({ setAddress, setIsConnected }) => {
  const { ethereum } = window;

  const [text, count] = useTypewriter({
    words: ["Hassle Free", "Seamlessly", "Flawlessly"],
    loop: true,
    delaySpeed: 2000,
  });

  const nav = useNavigate();

  useEffect(() => {
    if (!ethereum) {
      toast.error("Please install Metamask");
    }
  }, [ethereum]);

  const connectWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      toast.success(
        "Connected " + accounts[0].slice(0, 4) + "..." + accounts[0].slice(-4)
      );
      setAddress(accounts[0]);
      setIsConnected(true);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="hero h-screen overflow-hidden">
        <Navbar connectWallet={connectWallet} />
        <div className="flex flex-col items-center justify-center h-screen mx-auto">
          <p className="font-[800] text-6xl ">Showcase your NFT's</p>
          <p className="font-[800] text-6xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-[#3c81f6] to-[#c13584]">
            {text}
            <Cursor cursorColor="red" />
          </p>
          <p className="text-xl ">Showcase your NFT Collection to the World</p>
          <button
            className="bg-red-600 px-5 py-3 font-semibold my-5"
            onClick={connectWallet}
          >
            Get Started
          </button>
        </div>
      </section>
      <section className="flex items-center justify-between hero h-screen overflow-hidden bg-white px-10">
        <div className="mx-20">
          <p className="font-[800] text-6xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-[#3c81f6] to-[#c13584] ml-20">
            Showcase Your NFT's
          </p>
          <p className="text-xl text-[#0d192b] self-center">
            View your Owned NFT's on the Polygon Chain
          </p>
        </div>
        <img
          src={home}
          className="w-1/2 mx-5 rounded-lg shadow-2xl shadow-purple-300"
        />
      </section>
      <section className="flex items-center justify-between hero h-screen overflow-hidden px-10">
        <img src={explore} className="w-1/2 mx-5 rounded-lg shadow-2xl" />
        <div className="mx-20">
          <p className="font-[800] text-6xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-[#3c81f6] to-[#c13584]">
            Explore NFT's
          </p>
          <p className="text-xl self-center">
            Search for NFT's on the Polygon Chain using Wallet Address
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
