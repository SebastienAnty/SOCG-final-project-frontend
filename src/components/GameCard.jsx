import Card from "@mui/material/Card";
import { CardActionArea, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "space-evenly",
      }}
    >
      <CardActionArea>
        <CardMedia>
          <img src={game.imageUrl} alt={game.title} />
        </CardMedia>
        <Typography>
          <h1>{game.title}</h1>
        </Typography>
      </CardActionArea>
    </Card>
  );
}
