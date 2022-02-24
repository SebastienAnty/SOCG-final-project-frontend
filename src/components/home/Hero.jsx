import { useContext } from "react";
import { UserContext } from "../../App";

import Games from "../games/index";

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>
        <Games />
      </div>
    </>
  );
}
