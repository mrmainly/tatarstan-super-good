import { Box } from "@mui/system";

import { Header, Footer } from "../components";

const MainLayout = ({ children }) => {
    return (
        <Box sx={{ overflow: "hidden" }}>
            <Header />
            <Box>{children}</Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;
