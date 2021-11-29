import { useParams } from "react-router-dom";
import Chat from "../home/Chat";
import { useEffect, useState } from "react";

export default function GameChat() {
  const { gameId } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    fetch("https://socg-sma.web.app/rest/games", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setGame(data.find((g) => g.id === gameId)))
      .catch((err) => alert(err));
  }, [gameId]);

  return (
    <>
      <h1>{game && game.title}</h1>
      <Chat gameId={gameId} />
    </>
  );
}
