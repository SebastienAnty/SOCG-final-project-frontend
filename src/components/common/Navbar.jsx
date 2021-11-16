import React from "react";
import "./navbar.css";
import { Button } from "@mui/material";

export default function Navbar() {
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
        <h1>Social Gaming</h1>
        <Button style={{ fontSize: 25, color: "white" }}>Login/Logout</Button>
      </div>
    </>
  );
}
