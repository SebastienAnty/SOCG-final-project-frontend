import { useState, useEffect } from "react";

export default function Games() {
  const [games, setGames] = useState();
  useEffect(() => {
    fetch("https://socg-sma.web.app")
      .then((res) => res.json())
      .then((data) => setGames)
      .catch((err) => alert);
  }, []);
  return (
    <>
      <h1>Games</h1>
      {!games ? (
        <h2>Loading...</h2>
      ) : (
        games.map((_games) => {
          return (
            <div key={_games.id}>
              {_games.title} {_games.imageUrl}
            </div>
          );
        })
      )}
    </>
  );
}
