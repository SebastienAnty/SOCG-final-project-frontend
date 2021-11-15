import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./navbar.css";

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
        <Stack>
          <Avatar />
        </Stack>
      </div>
    </>
  );
}
