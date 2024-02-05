// Material UI
import { Stack, Container } from "@mui/material";

// Colors, Imgs, Icons, etc.
import colors from '../../utils/colors';

const Layout = ({ children }) => {
    return (
        <Stack
            width='100%'
            minHeight='100vh'
            bgcolor={colors.background}
            color={colors.text}
        >
            <Container maxWidth="md">
                {children}
            </Container>
        </Stack>
    );
}

export default Layout;
