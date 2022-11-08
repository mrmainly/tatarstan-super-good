import { useEffect } from "react";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

import { Header, Footer } from "../components";
import ROUTES from "../routes";

const MainLayout = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Box sx={{ overflow: "hidden" }}>
            {location.pathname === ROUTES.HOME && <Header />}
            <Box>{children}</Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;
