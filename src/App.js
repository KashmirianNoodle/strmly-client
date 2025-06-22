import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Feed from "./pages/Feed";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/upload" element={token ? <Upload token={token} /> : <Navigate to="/login" />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}
