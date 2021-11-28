// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";

import { useContext } from "react";
import { UserContext } from "../../App";
// import Carousel from "../GameCarousel";
import Games from "../games/index";
// import Carousel from "./Carousel";

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <>
      {/* <h1 className="neon-button">Welcome {!user ? "Guest" : user.fname}</h1> */}
      <div>
        <Games />
      </div>
    </>
  );
}
