import React from "react";
import Navbar from "./components/Navbar";

const Login = () => {
  return (
    <>
    <section className="hero bg-black h-[100vh]">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen mx-auto">
        <p className="font-[800] text-6xl ">Flex your NFT's with</p>
        <p className="font-[800] text-6xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-[#3c81f6] to-[#c13584]">Ab tak suja Nahi hai ye</p>
        <p className="text-xl ">Showcase your NFT Collection to the World</p>
        <button className="bg-red-600 px-5 py-3 font-semibold my-5">Get Started</button>
      </div>
    </section>
    Login
    </> 
  );
};

export default Login;
