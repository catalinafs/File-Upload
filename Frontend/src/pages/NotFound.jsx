// Custom Components
import Layout from "../components/ui/Layout";

// Material UI
import { Stack, Typography } from "@mui/material";

// Colors, Imgs, Icons, etc.
import colors from "../utils/colors";

const NotFound = () => {
    return (
        <Layout>
            <Stack justifyContent='center' alignItems='center' paddingTop={{xs: 16,md: 28}}>
                <Typography variant="h2" color={colors.text} fontWeight={700}>
                    Page Not Found | <Typography
                        variant="h2"
                        color={colors.accent}
                        fontWeight={700}
                        component='span'
                    >404</Typography>
                </Typography>
                <Typography
                    variant="h3"
                    color={colors.text}
                    paddingTop={5}
                    fontSize={{ xs: '30px', md: '40px' }}
                    component='a'
                    href="/"
                    sx={{
                        ':hover': {
                            textDecoration: 'none',
                            color: colors.accent
                        }
                    }}
                >
                    Go Home
                </Typography>
            </Stack>
        </Layout>
    );
}

export default NotFound;
