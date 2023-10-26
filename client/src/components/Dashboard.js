import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Link to="/transactions">
        <Button variant="success">Make a Payment</Button>
        {""}
      </Link>
      <br />
      <br />
      <Link to="/openaccount">
        <Button variant="success">Open Account</Button>
        {""}
      </Link>
    </>
  );
};

export default Dashboard;
