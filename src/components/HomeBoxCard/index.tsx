import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { debug } from "console";

interface Props {
    img: string;
    title: string;
    text: string;
}
const HomeBoxCard = ({ img, title, text }: Props) => {
    return (
        <Box sx={{
            maxWidth: 300,
            boxShadow: 3,
            "&:hover > *": {
                backgroundColor: 'orange',
                boxShadow: 20,
                cursor:"pointer"
            }
        }}>
            <Box sx={{
                height: 80,
                backgroundColor: "white",
                padding: '10px',
                paddingTop: 3,

            }}>
                <Typography textAlign="center" mb="10px" variant="h6" fontWeight={700}>{title}</Typography>
            </Box>
            <Box sx={{
                height: 200,
                background: `url('${img}') center`,
                backgroundSize: 'cover'
            }}>
            </Box>
            <Box sx={{
                height: 80,
                backgroundColor: "white",
                padding: '10px'
            }}>
                <Typography textAlign="center">{text}</Typography>
            </Box>
        </Box>
    )
}
export default HomeBoxCard;