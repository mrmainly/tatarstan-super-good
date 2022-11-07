import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Title, Line } from "../../../../components";

const News = () => {
    return (
        <Container
            maxWidth="xl"
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 100,
            }}
        >
            <Line />
            <Title>НОВОСТНОЙ БЛОГ</Title>
        </Container>
    );
};

export default News;
