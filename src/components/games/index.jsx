import { useState, useEffect } from "react";
import GameCard from "../GameCard";

export default function Games() {
  const [games, setGames] = useState();
  useEffect(() => {
    fetch("https://socg-sma.web.app/games")
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
