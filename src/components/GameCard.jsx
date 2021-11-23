import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
  return (
    <Card
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-evenly",
        width: "23%",
      }}
    >
      <CardActionArea>
        <CardContent>
          <CardMedia>
            <img
              style={{ width: "300px", height: "350px", display: "flex" }}
              src={game.imageUrl}
              alt={game.title}
            />
          </CardMedia>
          <Typography>
            <h1>{game.title}</h1>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
