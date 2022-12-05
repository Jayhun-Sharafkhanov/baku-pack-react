import { Box, Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import dots from "assets/img/dots.png";
import img1 from "assets/img/mehsullar/img1.jpg";
import img2 from "assets/img/mehsullar/img2.jpg";
import PageContainer from "../../components/PageContainer";
import { useState } from 'react'
import MehsulCard from "./Card";


const categories = [
    {
        key: 1,
        category: "Bütün məhsullar"
    },
    {
        key: 2,
        category: "Karton qutular"
    },
    {
        key: 3,
        category: "Tort qutuları"
    },
    {
        key: 4,
        category: "Kağız paketləri"
    },
    {
        key: 5,
        category: "Meyvə tərəvəz qutuları"
    },
    {
        key: 6,
        category: "Hədiyyə çantaları"
    },
    {
        key: 7,
        category: "Qida qutuları"
    },
    {
        key: 8,
        category: "Şirniyyat qutuları"
    },
    {
        key: 9,
        category: "Tort altlıqları"
    },
    {
        key: 10,
        category: "Paxlava qutuları"
    },
    {
        key: 11,
        category: "Şokolad qutuları"
    },
    {
        key: 12,
        category: "Konfet qutuları"
    },
    {
        key: 13,
        category: "Ədviyyat qutuları"
    },
]

const Mehsullar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <PageContainer>
                <Box>
                    <Box sx={{
                        // backgroundImage: `url("${img1}")`,
                        // backgroundAttachment:"fixed",
                        // backgroundPosition:"center",
                        // backgroundRepeat:"no-repeat",
                        // backgroundSize:"cover",
                        backgroundColor: 'rgba(246, 245, 240, 1)',
                        borderRadius: "0 0 0 200px",
                        position: "relative",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 200,
                            height: 180,
                            backgroundColor: 'rgba(246, 245, 240, 1)',
                            zIndex: -1,
                            right: 0
                        }
                    }}>
                        <Container maxWidth="xl" style={{ padding: '80px 0' }}>
                            <Grid container sx={{ padding: "40px 0" }}>
                                <Grid item xs={12} md={5}>
                                    <div className="backgroundWithDots" style={{
                                        backgroundImage: `url(${dots})`,
                                        left: 200,
                                        top: -20,
                                        zIndex: 3
                                    }}></div>
                                    <Box className="backgroundWithDots" sx={{
                                        backgroundImage: `url(${dots})`,
                                        left: -80,
                                        top: 120,
                                        zIndex: 3,
                                        "&::before": {
                                            content: '""',
                                            border: '10px solid rgba(253, 137, 119, 1)',
                                            width: 120,
                                            height: 120,
                                            position: 'absolute',
                                            borderRadius: '50%',
                                            top: -120,
                                            right: 140,
                                            zIndex: -1
                                        }
                                    }}></Box>
                                    <img src={img1} alt="" style={{ position: 'relative', zIndex: 5, top: -100 }} />
                                    <img src={img2} alt="" style={{ position: 'relative', zIndex: 5, top: 60, left: 20 }} />
                                </Grid>
                                <Grid item xs={10} md={6} lg={5} sx={{
                                    margin: {
                                        xs: "0 auto",
                                        md: 0
                                    }
                                }}>
                                    <Typography variant="h2" component="h1" fontWeight={700}><Typography variant="h2" component="span" fontWeight={700} sx={{ color: 'gold' }}>Baku</Typography> Polygraphy</Typography>
                                    <Typography sx={{
                                    }}>
                                        BakuPolygraphy 50 nəfərə yaxın heyətdən ibarət olan və yeni avadlıqlarla təmin olunan şirkətdir və bütün növ karton qutu və qablaşdırma məhsullarını hazırlamaq gücünə malikdir. Biz qısa müddət ərzində müştərilərimizn çox yüksək rəyinə nail olmağı bacarmışıq. Şirkət tələb olunan istehsalat prosesinin hər mərhələsinə qüsursuz və keyfiyyətlə yanaşır, imic və reputasyasını qoruyur                                        </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box sx={{
                        backgroundColor: 'white',
                        borderRadius: "0 200px 0 0",
                    }}>
                        <Container maxWidth="xl" style={{ padding: '20px' }}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link fontWeight={600} underline="hover" color="inherit" href="/">
                                    Ana sehife
                                </Link>
                                <Typography fontWeight={600} color="text.primary">Mehsullar</Typography>
                            </Breadcrumbs>
                            {/* Categories */}
                            <Grid container sx={{
                                paddingTop: 10,
                                paddingBottom: 10,
                            }}>
                                <Grid item xs={12} sx={{
                                    marginBottom: 5
                                }}>
                                    <Button variant="contained" onClick={() => setOpenDrawer(true)}>Kateqoriyalar</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography textAlign="center" mb="10px" variant="h4" fontWeight={700}>Qablaşdırma məhsulları</Typography>
                                    <Typography maxWidth="md" textAlign="center" mb={8} mx="auto" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsums</Typography>
                                    <Stack flexDirection="row" justifyContent="center" flexWrap="wrap" sx={{ gap: 3 }}>
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                        <MehsulCard img={img1} text="Mehsul adi" />
                                    </Stack>
                                    <Grid item xs={12} sx={{paddingTop:10}}>
                                        <Typography textAlign="center" mb="10px" variant="h4" fontWeight={700}>Qablaşdırma məhsulları</Typography>
                                        <Typography maxWidth="md" textAlign="center" mb={8} mx="auto" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsums</Typography>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Container>
                    </Box>
                    <Drawer
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                    >
                        <List sx={{
                            width: 300
                        }}>
                            <Typography component="h3" variant="h5" fontWeight={600} sx={{ paddingLeft: 2, marginBottom: 3 }}>Kateqoriyalar</Typography>
                            {categories.map(({ key, category }) => (
                                <ListItem key={key} disablePadding>
                                    <ListItemButton>
                                        <FormControlLabel control={<Checkbox />} label={<ListItemText primary={category} />} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
            </PageContainer>
        </>
    )
}
export default Mehsullar;