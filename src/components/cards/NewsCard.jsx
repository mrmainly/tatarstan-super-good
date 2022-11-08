import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "..";

const Card = styled(Box)({
    border: "1px solid #3A586E",
    cursor: "pointer",
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

const Img = styled("img")(({ theme }) => ({
    width: "50%",
    height: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: 200,
    },
}));

const BoxNews = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    marginTop: 7,
    height: 295,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: "auto",
    },
}));

const LineVertical = styled(Box)(({ theme }) => ({
    height: "100%",
    width: 1,
    background: "#3A586E",
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
        height: 1,
        width: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 20,
        marginBottom: 20,
    },
}));

const Description = styled("div")(({ theme }) => ({
    width: "50%",
    display: "flex",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const NewsCard = ({ img, description, title, date, id }) => {
    return (
        <Card>
            <Text
                sx={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: "#3A586E",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {title}
            </Text>
            <Text sx={{ color: "#3A586E" }}>4 ноября 2022 года</Text>

            <BoxNews>
                <Img src={img} />
                <LineVertical />

                <Description>
                    <Text
                        sx={{ fontSize: 18, fontWeight: 400, color: "#3A586E" }}
                    >
                        {description}
                    </Text>
                </Description>
            </BoxNews>
        </Card>
    );
};

export default NewsCard;
