// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";

import { useContext } from "react";
import { UserContext } from "../../App";
import Games from "../games/index";
// import Carousel from "./Carousel";

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <>
      {/* <h1 class="neon-button">Welcome {!user ? "Guest" : user.fname}</h1> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Games />
      </div>
    </>
  );
}
