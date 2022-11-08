import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MyLine = styled(Box)(({ theme }) => ({
    width: 100,
    height: 2,
    marginBottom: 100,
    background: "rgba(124, 125, 126, 0.49)",
    [theme.breakpoints.down("sm")]: {
        marginBottom: 60,
    },
}));

const Line = () => {
    return <MyLine />;
};

export default Line;
