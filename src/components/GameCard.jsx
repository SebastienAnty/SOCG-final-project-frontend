import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-evenly",
        width: "23%",
      }}
    >
      <CardActionArea>
        <CardContent>
          <CardMedia>
            <img src={game.imageUrl} alt={game.title} />
          </CardMedia>
          <Typography>{game.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
