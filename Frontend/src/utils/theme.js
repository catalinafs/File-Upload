import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#C987E3",
            contrastText: "#f3e5f9",
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontWeight: 500,
            },
        },
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
            },
            styleOverrides: {
                root: {
                    "-webkit-transform": "scale(1)",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    '&::placeholder': {
                        color: 'red',
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
            },
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        color: '#F3E5F9',
                        fontWeight: 600,
                        borderColor: '#861f40c9',
                        borderWidth: "2px",
                        ":hover": {
                            borderWidth: "2px",
                        },
                    },
                },
                {
                    props: { variant: "contained" },
                    style: {
                        color: '#252525',
                        backgroundColor: "#c987e3e0",
                        border: 0,
                        ":hover": {
                            backgroundColor: "#C987E3",
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    borderRadius: "5px",
                    textTransform: "none",
                    padding: "8px 18px",
                },
            },
        },
    },
});

export default theme;