import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Games from "../games/index";

export default function Hero() {
  return (
    <>
      <Card style={{ width: "100%", height: "100%" }}>
        <CardActionArea>
          <CardContent>
            <CardMedia>
              <Games />
            </CardMedia>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
