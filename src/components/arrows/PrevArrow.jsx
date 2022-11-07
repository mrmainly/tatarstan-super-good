import { Box, IconButton } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material";

const ArrowBack = styled(Box)(({ theme }) => ({
    position: "absolute",
    zIndex: 1,
    left: "-50px",
    height: "100%",
}));

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <ArrowBack style={{ ...style }} onClick={onClick}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <IconButton>
                    <ChevronLeftIcon fontSize="large" />
                </IconButton>
            </Box>
        </ArrowBack>
    );
}

export default SamplePrevArrow;
