import MenuIcon from '@mui/icons-material/Menu';
import { Grid, MenuItem, MenuList, Select } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import logo from "assets/img/logo.png";
import * as React from 'react';
import { Link } from 'react-router-dom';
import NavigationLink from './navbar';

const navs = [
    {
        to: '/about',
        pageName: 'Haqqımızda'
    },
    {
        to: '/xammal',
        pageName: 'Xammal'
    },
    {
        to: '/mehsullar',
        pageName: 'Məhsullar'
    },
    {
        to: '/catdirilma',
        pageName: 'Çatdırılma'
    },
    {
        to: '/istehsal-prosesi',
        pageName: 'İstehsal prosesi'
    },
    {
        to: '/qalereya',
        pageName: 'Qalereya'
    },
    {
        to: '/elaqe',
        pageName: 'Əlaqə'
    },
]

function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="sticky" sx={{
            backgroundColor: "white"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Grid container sx={{ justifyContent: { xs: 'space-between', md: 'flex-start' }, padding: '20px 0' }}>
                        <Grid item xs={8} sm={6} md={3}>
                            <Link to="/">
                                <Box sx={{
                                    maxWidth: 200,
                                }}>
                                    <img style={{ width: '100%' }} src={logo} alt="" />
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={2} sx={{ maxWidth: 50, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: 'black' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuList sx={{
                                    '& a': {
                                        color: 'black',
                                        textDecoration: 'none'
                                    }
                                }}>
                                    {
                                        navs.map((el) => {
                                            return (
                                                <MenuItem key={el.to}>
                                                    <NavigationLink {...el} />
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </MenuList>
                            </Menu>
                        </Grid>
                        <Grid item md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Stack direction="row" alignItems="center" spacing={3}
                                sx={{
                                    '& > a': {
                                        color: 'black',
                                        textDecoration: 'none'
                                    }
                                }}
                            >
                                {
                                    navs.map((el) => {
                                        return (<NavigationLink key={el.to} {...el} />)
                                    })
                                }
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: "flex-end"
                            }}>
                                <Select
                                    value="az"
                                    // label=""
                                    // onChange={handleChange}
                                    sx={{
                                        '&, & *': {
                                            border: 'none !important'
                                        }
                                    }}
                                >
                                    <MenuItem value={"az"}>Az</MenuItem>
                                    <MenuItem value={"en"}>En</MenuItem>
                                    <MenuItem value={"ru"}>Ru</MenuItem>
                                </Select>
                            </Box >
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;