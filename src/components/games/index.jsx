import { useState, useEffect } from "react";

export default function Games() {
  const [games, setGames] = useState();
  useEffect(() => {
    fetch("https://socg-sma-default-rtdb.firebaseio.com")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => alert(err));
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
