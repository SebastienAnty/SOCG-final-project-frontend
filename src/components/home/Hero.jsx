// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";

import Games from "../games/index";

export default function Hero() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Games />
      </div>
    </>
  );
}
