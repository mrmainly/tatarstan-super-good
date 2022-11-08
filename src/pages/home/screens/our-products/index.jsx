import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Title, Line } from "../../../../components";

const Card = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "100%",
    transition: "all 1s ease",
    "&:hover": {
        boxShadow: "0px 0px 20px rgba(0,0,0,0.8)",
    },
}));

const OurProducts = () => {
    const list = [
        "/img/Frame3596.svg",
        "/img/Frame3597.svg",
        "/img/Frame3598.svg",
        "/img/Frame3599.svg",
    ];

    return (
        <Container
            id="products"
            maxWidth="xl"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 100,
            }}
        >
            <Line />
            <Title>НАШИ ПРОДУКЦИИ</Title>
            <Grid
                container
                spacing={3}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <a href="https://drive.google.com/file/d/12R0YSqlQh2I8GYPwvUGlBI5orw5L0e5P/view?usp=sharing">
                        <Card src={"/img/Frame2592.svg"} alt="" />
                    </a>
                </Grid>
                {list.map((item, index) => (
                    <Grid item key={index} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <img src={item} alt="" style={{ width: "100%" }} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default OurProducts;
