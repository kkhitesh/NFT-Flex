import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Explore = () => {
  const [address, setAddress] = useState("");
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-5">
        <input
          type={"text"}
          placeholder={"Enter Address"}
          className="w-[60%] h-12 mt-5 rounded-sm text-slate-700 px-10"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className={"bg-red-600 px-5 py-3 my-5 text-white font-semibold"}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Explore;
