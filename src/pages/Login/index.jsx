import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useTypewriter } from "react-simple-typewriter";

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
          <p className="font-[800] text-6xl ">Flex your NFT's</p>
          <p className="font-[800] text-6xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-[#3c81f6] to-[#c13584]">
            {text}
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
      <section></section>
    </>
  );
};

export default Login;
