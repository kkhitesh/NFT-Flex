import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Coins from "./pages/Coins";
import NFTs from "./pages/NFTs";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <Toaster />
      {/* Login */}
      {isConnected ? (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                isConnected={isConnected}
                setIsConnected={setIsConnected}
                address={address}
              />
            }
          />
          <Route
            exact
            path="/explore"
            element={
              <Explore
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            exact
            path="/coins"
            element={
              <Coins
                isConnected={isConnected}
                setAddress={setAddress}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            exact
            path="/nfts"
            element={
              <NFTs
                isConnected={isConnected}
                setAddress={setAddress}
                setIsConnected={setIsConnected}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            exact
            path="/coins"
            element={
              <Coins
                isConnected={isConnected}
                setAddress={setAddress}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            exact
            path="/nfts"
            element={
              <NFTs
                isConnected={isConnected}
                setAddress={setAddress}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Login setAddress={setAddress} setIsConnected={setIsConnected} />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
