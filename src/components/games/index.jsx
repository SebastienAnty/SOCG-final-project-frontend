import { useState, useEffect } from "react";
import GameCard from "../GameCard";

export default function Games() {
  const [games, setGames] = useState();
  useEffect(() => {
    // fetch("http://localhost:5000/games", {
    fetch("https://socg-sma.web.app/rest/games", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      {!games ? (
        <h2>Loading...</h2>
      ) : (
        games.map((_games) => {
          return <GameCard key={_games.id} game={_games} />;
        })
      )}
    </>
  );
}
