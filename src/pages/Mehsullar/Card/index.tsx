import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
interface Props {
    img: string;
    text: string;
}
const MehsulCard = ({ img, text }: Props) => {
    return (
        <Card sx={{
            boxShadow:3,
            maxWidth: 345,
            minWidth: 200,
            "&:hover": {
                backgroundColor: "primary.main",
                color: "white"
            }
        }}>
            <CardActionArea>
                <CardMedia
                    sx={{
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}
                    component="img"
                    height="140"
                    image={img}
                    alt={text}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default MehsulCard;