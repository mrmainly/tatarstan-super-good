import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "..";

const Card = styled(Box)({
    width: 250,
    display: "flex",
    flexDirection: "column",
    marginRight: 28,
    marginLeft: 18,
});

const Img = styled("img")({
    width: "auto",
    height: 250,
    // objectFit: "cover",
});

const FlagsCard = ({ img, region, full_name }) => {
    return (
        <Card>
            <Text
                sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    textAlign: "center",
                    height: 56,
                    mb: 2.9,
                }}
            >
                {region}
            </Text>
            <Img src={img} />
            <Text
                sx={{
                    fontSize: 14,
                    fontWeight: 400,
                    textAlign: "center",
                    mt: 1.1,
                }}
            >
                {full_name}
            </Text>
        </Card>
    );
};

export default FlagsCard;
