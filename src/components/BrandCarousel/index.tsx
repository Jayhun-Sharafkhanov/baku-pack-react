import Carousel from "react-multi-carousel";
import Box from "@mui/material/Box"
import "react-multi-carousel/lib/styles.css";
import balCake from "assets/img/home/brands/bal_cake.png"
import ilgim from "assets/img/home/brands/ilgim.png"


const items = [

    {
        key: 1,
        src: balCake,
    },
    {
        key: 2,
        src: ilgim,
    },
    {
        key: 3,
        src: ilgim,
    },
    {
        key: 4,
        src: ilgim,
    },
    {
        key: 5,
        src: balCake,
    },
    {
        key: 6,
        src: ilgim,
    },
    {
        key: 11,
        src: balCake,
    },
    {
        key: 12,
        src: ilgim,
    },
    {
        key: 13,
        src: ilgim,
    },
    {
        key: 14,
        src: ilgim,
    },
    {
        key: 15,
        src: balCake,
    },
    {
        key: 16,
        src: ilgim,
    },
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 7,
    },
    tablet: {
        breakpoint: { max: 1200, min: 700 },
        items: 5,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    }
}

const BrandCarousel = () => {
    return (
        <Box sx={{
            position:'relative',
            '& ul': {
                gap: "20px"
            },
            '&::before':{
                content:'""',
                width:50,
                top:0,
                bottom:0,
                left:0,
                background:'linear-gradient(to right, white, transparent)',
                position:'absolute',
                zIndex:2
            },
            '&::after':{
                content:'""',
                width:50,
                top:0,
                bottom:0,
                right:0,
                background:'linear-gradient(to right,transparent, white)',
                position:'absolute',
                zIndex:2
            },
        }}>
            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                className=""
                arrows={false}
            >
                {items.map(({ src, key }) => <img style={{
                    width: 100,
                }} src={src} key={key} alt=""/>)}
            </Carousel>
        </Box>
    )
}
export default BrandCarousel;