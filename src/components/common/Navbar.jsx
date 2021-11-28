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
          alignContent: "space-between",
          flexDirection: "row",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Button>
          <h1
            className="neon-button navbar-expand-lg navbar-dark bg-dark"
            onClick={() => navigate("/")}
          >
            Social Gaming
          </h1>
        </Button>

        {!user && (
          <Button onClick={() => navigate("/login")}>Login/SignUp</Button>
        )}
      </div>
    </>
  );
}
