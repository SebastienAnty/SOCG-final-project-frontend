import { useState, useEffect } from "react";

export default function Games(props) {
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
          return (
            <div key={_games.id}>
              <h1>
                {_games.title} {_games.imageUrl}
              </h1>
            </div>
          );
        })
      )}
    </>
  );
}
