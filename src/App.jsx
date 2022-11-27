import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";

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
        </Routes>
      ) : (
        <Login setIsConnected={setIsConnected} setAddress={setAddress} />
      )}
    </div>
  );
}

export default App;
