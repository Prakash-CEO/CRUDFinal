import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CommerceSplit from "./CommerceSplit";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Dashboard from "./components/Dashboard";
import OpenAccount from "./components/OpenAccount";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/commercesplit" element={<CommerceSplit />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/openaccount" element={<OpenAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
