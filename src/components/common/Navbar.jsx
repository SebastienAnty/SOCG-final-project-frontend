import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "space-around",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#ff9800",
        }}
      >
        <Button onClick={() => navigate("/")}>Social Gaming</Button>
        <Button onClick={() => navigate("/login")}>Login/SignUp</Button>
      </div>
    </>
  );
}
