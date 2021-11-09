import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';

export default function Hero() {
    return (
    <>
        <div>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/FIFA22.jpeg"
                        alt="Image of soccer player staring up."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            FIFA 22
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, Nintendo, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}} style={{display:"flex", flexDirection:"row"}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/Madden22.jpeg"
                        alt="Image of two american-football players staring down at a camera."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Madden NFL 22
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width="120"
                            image="/public/images/NBA2K22.jpeg"
                            alt="Image of a basketball player taking a shot while fading away."
                        />
                        <Typography gutterBottom variant="h5" component="div">
                            NBA 2K22
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/CODWarzone.jpeg"
                        alt="Image of eight soldiers sitting down hillside with firearms in their hands."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Call of Duty: Warzone
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/FIFA22.jpeg"
                        alt="Image of soldiers on the battlefield with airplanes flying overhead."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Call of Duty: Vanguard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/SmashBros.jpeg"
                        alt="Image of Nintendo characters preparing for battle."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Super Smash Bros. Ultimate
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: Nintendo Switch
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/GTAV.jpeg"
                        alt="Collage of characters, helicopters, dogs, and motor vehicles."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Grand Theft Auto V
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/Fortnite.jpeg"
                        alt="Image of four characters with weapons in hand standing on a crate with zombie hands reaching around the crate."
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Fortnite
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        width="120"
                        image="/public/images/ApexLeg.jpeg"
                        alt="Image of two characters with backs to each other and weapons in hand with a red and white background split 40/60"
                    />
                        <Typography gutterBottom variant="h5" component="div">
                            Apex Legends
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Available for: XBOX, PlayStation, PC
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    </>
    )
};