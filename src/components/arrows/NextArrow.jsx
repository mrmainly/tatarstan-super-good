import { Box, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { styled } from "@mui/material";

const ArrowNext = styled(Box)(({ theme }) => ({
    zIndex: 1,
    right: "-50px",
    position: "absolute",
    height: "100%",
    top: 0,
}));

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <ArrowNext style={{ ...style }} onClick={onClick}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <IconButton>
                    <ChevronRightIcon fontSize="large" />
                </IconButton>
            </Box>
        </ArrowNext>
    );
}

export default SampleNextArrow;
