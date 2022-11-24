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
        <Home
          isConnected={isConnected}
          setIsConnected={setIsConnected}
          address={address}
        />
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login setIsConnected={setIsConnected} setAddress={setAddress} />
            }
          />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      )}
      {/* <Login setIsConnected={setIsConnected} /> */}
      {/* Home */}
    </div>
  );
}

export default App;
