import { Container, Grid } from "@mui/material";

import { Title, Line } from "../../../../components";

const OurProducts = () => {
    const list = [
        "/img/Frame2592.svg",
        "/img/Frame3596.svg",
        "/img/Frame3597.svg",
        "/img/Frame3598.svg",
        "/img/Frame3599.svg",
    ];

    return (
        <Container
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
