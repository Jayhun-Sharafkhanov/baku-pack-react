import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(253, 137, 119)"
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 100
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 100,
                    color: "white"
                }
            }
        }
    }
});

export default theme;