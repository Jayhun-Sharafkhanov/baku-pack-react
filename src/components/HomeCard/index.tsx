import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

interface Props {
    bgcolor: 'rgb(255, 243, 205)' | 'rgb(255, 238, 232)' | 'rgb(241, 252, 239)'
    icon: React.ReactElement;
    text: string;
    title: string;
}


const HomeCard = ({ bgcolor, icon, text, title }: Props) => {
    return (
        <Box
        sx={{
            bgcolor,
            padding: '20px',
            borderRadius: '10px',
            minHeight:200
        }}
        >
            <Grid
                // direction="column"
                justifyContent="space-around"
                alignItems="center"
                container
                sx={{
                }}
            >
                <Grid item xs={2}>
                    {icon}
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" fontWeight={600}>{title}</Typography>
                    <Typography>{text}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
export default HomeCard;