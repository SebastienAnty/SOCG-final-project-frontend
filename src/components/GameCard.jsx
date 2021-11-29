import { useNavigate } from "react-router-dom";
import Coverflow from "react-coverflow";
import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, CardContent, Button } from "@mui/material";

import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/game-chat/" + game.id)}
      style={{
        width: "108%",
      }}
    >
      <CardActionArea>
        <CardContent>
          <CardMedia>
            <img
              style={{ width: "300px", height: "300px", display: "flex" }}
              src={game.imageUrl}
              alt={game.title}
            />
          </CardMedia>
          <h1>{game.title}</h1>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
