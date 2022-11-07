import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

import { Header, Footer } from "../components";

const MainLayout = () => {
    return (
        <Box>
            <Header />
            <Box>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;
