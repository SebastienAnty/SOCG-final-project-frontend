import Coverflow from "react-coverflow";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      display="flex"
      flex-wrap="wrap"
      width="37%"
    >
      <Card
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "108%",
          flexDirection: "column",
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
            <h1>{game.title}</h1>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
