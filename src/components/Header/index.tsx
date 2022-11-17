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

function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static">
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
                        <Grid item xs={2} sx={{ maxWidth: 50, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                    <MenuItem>
                                        <NavigationLink to='/about' pageName='Haqqımızda' />
                                    </MenuItem>
                                    <MenuItem>
                                        <NavigationLink to='#' pageName='Xammal' />
                                    </MenuItem>
                                    <MenuItem>
                                        <NavigationLink to='#' pageName='Məhsullar' />
                                    </MenuItem>
                                    <MenuItem>
                                        <NavigationLink to='#' pageName='Çatdırılma' />
                                    </MenuItem>
                                    <MenuItem>
                                        <NavigationLink to='#' pageName='İstehsal prosesi' />
                                    </MenuItem>
                                    <MenuItem>
                                        <NavigationLink to='#' pageName='Qalereya' />
                                    </MenuItem>
                                    <MenuItem>
                                        <NavigationLink to='#' pageName='Əlaqə' />
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Grid>
                        <Grid item md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Stack direction="row" alignItems="center" spacing={3}
                                sx={{
                                    '& > a': {
                                        color: 'white',
                                        textDecoration: 'none'
                                    }
                                }}
                            >
                                <NavigationLink to='/about' pageName='Haqqımızda' />
                                <NavigationLink to='#' pageName='Xammal' />
                                <NavigationLink to='#' pageName='Məhsullar' />
                                <NavigationLink to='#' pageName='Çatdırılma' />
                                <NavigationLink to='#' pageName='İstehsal prosesi' />
                                <NavigationLink to='#' pageName='Qalereya' />
                                <NavigationLink to='#' pageName='Əlaqə' />
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
                                        '& *':{
                                            border:'none'
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