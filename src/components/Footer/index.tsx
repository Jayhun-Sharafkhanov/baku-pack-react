import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "assets/img/logo.png";
import { Container } from "@mui/material";
import NavigationLink from "components/Header/navbar";
import { Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box sx={{ boxShadow: "0px 2px 4px 1px rgb(0 0 0 / 20%), 0px 4px 5px 1px rgb(0 0 0 / 14%), 0px 1px 10px 1px rgb(0 0 0 / 12%)", marginTop: 10 }}>
            <Container maxWidth="xl">
                <Grid container sx={{ padding: '20px 0' }}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Link to="/">
                            <Box sx={{
                                maxWidth: 200,
                            }}>
                                <img style={{ width: '100%' }} src={logo} alt="" />
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            '& > a': {
                                color: 'black',
                                textDecoration: 'none'
                            },
                            marginTop: { xs: "10px" }
                        }}
                    >
                        <NavigationLink to='/about' pageName='Haqqımızda' />
                        <NavigationLink to='#' pageName='Xidmət' />
                        <NavigationLink to='#' pageName='Çatdırılma' />
                        <NavigationLink to='#' pageName='Əlaqə' />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            '& > a': {
                                color: 'black',
                                textDecoration: 'none'
                            },
                            marginTop: { xs: "10px" }
                        }}
                    >
                        <NavigationLink to='#' pageName='Karton qutular' />
                        <NavigationLink to='#' pageName='Tort qutuları' />
                        <NavigationLink to='#' pageName='Kağız paketləri' />
                        <NavigationLink to='#' pageName='Meyvə tərəvəz qutuları' />
                        <NavigationLink to='#' pageName='Hədiyyə çantaları' />
                        <NavigationLink to='#' pageName='Qida qutuları' />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}
                        sx={{
                            marginTop: { xs: "10px" },
                            display: 'flex',
                            flexDirection: 'column',
                            '& > a': {
                                color: 'black',
                                textDecoration: 'none'
                            }
                        }}
                    >
                        <NavigationLink to='#' pageName='Şirniyyat qutuları' />
                        <NavigationLink to='#' pageName='Tort altlıqları' />
                        <NavigationLink to='#' pageName='Paxlava qutuları' />
                        <NavigationLink to='#' pageName='Şokolad qutuları' />
                        <NavigationLink to='#' pageName='Konfet qutuları' />
                        <NavigationLink to='#' pageName='Ədviyyat qutuları' />
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}
                        sx={{
                            marginTop: { xs: "10px" },
                            display: 'flex',
                            flexDirection: 'column',
                            '& > a': {
                                color: 'black',
                                textDecoration: 'none'
                            }
                        }}
                    >
                        <Typography variant="body2">Lorem Ipsum is simply dummy text of the printing and industry</Typography>
                        <Typography variant="body2">info@bakupolygraphy.az</Typography>
                        <Typography variant="body2">+994 50 770 33 23</Typography>
                        <Typography variant="body2">+994 50 584 47 67</Typography>
                        <Box
                            sx={{ display: 'inline-flex' }}
                        >
                            <WhatsAppIcon />
                            <PhoneEnabledIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                        </Box>
                    </Grid>
                </Grid>
                <Stack sx={{ marginTop: '20px' }} direction="row" justifyContent="space-between">
                    <Box>
                        <Typography component="span">© 2022</Typography>
                        <Typography component="span" sx={{ marginLeft: '20px' }} >Data Privacy</Typography>
                    </Box>
                    <Box>
                        <Typography component="span" >Design by:
                            <Typography component="span" sx={{ fontWeight: 900 }}>JEDAI</Typography>
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
        </>
    )
}
export default Footer;