import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../App";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "space-around",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        class="neon"
      >
        <Button>
          <h1 class="neon-button" onClick={() => navigate("/")}>
            Social Gaming
          </h1>
        </Button>

        {!user && (
          <Button onClick={() => navigate("/login")}>Login/SignUp</Button>
        )}

        {/* <Button onClick={() => navigate("/login")}>Sign Out</Button> */}
      </div>
    </>
  );
}
