import { useState } from "react";
import { Box, Container, MenuItem, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Line, Title, Text } from "../../../../components";

const MapWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}));

const Menu = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20,
    },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    marginTop: 10,
}));

const OurRepresentations = () => {
    const [currentMap, setCurrentMap] = useState(1);

    const menuList = [
        {
            label: "Республика Крым",
            id: 1,
        },
        {
            label: "Республика Саха (Якутия)",
            id: 2,
        },
        {
            label: "Республика Казахстан",
            id: 3,
        },
        {
            label: "Запорожская область",
            id: 4,
        },
        {
            label: "Республика Татарстан",
            id: 5,
        },
        {
            label: "город Москва",
            id: 6,
        },
        {
            label: "Херсонская область",
            id: 7,
        },
        {
            label: "Республика Узбекистан",
            id: 8,
        },
        {
            label: "Белоруссия",
            id: 9,
        },
    ];

    const maps = [
        {
            id: 1,
            map: "/img/maps/krim.png",
            description: "Республика Крым, г. Симферополь, ул. Пролетарская 2/17. тел.: +7 978 (093) 83-00, эл. почта: tdregionsnab@list.ru",
            full_name: "Камальдинов Рамиль Салимджанович",
        },
        {
            id: 2,
            map: "/img/maps/yakutsk.png",
            description: "Республика Саха (Якутия). тел.: +7 914 (234) 26-13, эл почта: tdregionsnab@list.ru",
            full_name: "Михайлов Анатолий Николаевич",
        },
        {
            id: 3,
            map: "/img/maps/kazax.png",
            description: "Республика Казахстан. г. Астана, улица Чингина Айтматова 46, здание “Адалант” 7 этаж, каб. 34,",
            full_name: "тел.: +7(701) 233 82-22, Актаев Аманжол",
        },
        {
            id: 4,
            map: "/img/maps/zaparosh.png",
        },
        {
            id: 5,
            map: "/img/maps/tatarstan.png",
        },
        {
            id: 6,
            map: "/img/maps/moscow.png",
        },
        {
            id: 7,
            map: "/img/maps/xerson.png",
        },
        {
            id: 8,
            map: "/img/maps/yzbek.png",
        },
        {
            id: 9,
            map: "/img/maps/bellorus.png",
        },
    ];

    return (
        <Container
            id="our-representations"
            maxWidth="xl"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 100,
            }}
        >
            <Line />
            <Title>НАШИ ПРЕДСТАВИТЕЛЬСТВА</Title>
            <Grid container spacing={3} style={{ display: "flex", alignItems: "center" }}>
                <Grid item xl={3} lg={3} md={3} sm={12} xs={12} sx={{ display: "flex", alignItems: "center" }}>
                    <Menu>
                        {menuList.map((item, index) => (
                            <CustomMenuItem key={index} onClick={() => setCurrentMap(item.id)}>
                                <Text
                                    id="item"
                                    style={{
                                        color: item.id === currentMap ? "#FF0000" : "rgba(58, 88, 110, 0.7)",
                                        marginTop: 10,
                                        transition: "all 0.5s ease",
                                    }}
                                >
                                    {item.label}
                                </Text>
                            </CustomMenuItem>
                        ))}
                    </Menu>
                </Grid>
                <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                    {maps.map((item, index) => (
                        <Box
                            key={index}
                            style={{
                                transition: "all 0.5s ease-in",
                                display: currentMap === item.id ? "block" : "none",
                                textAlign: "end",
                            }}
                        >
                            <img
                                src={item.map}
                                alt=""
                                style={{
                                    width: "100%",
                                }}
                            />
                            <Text style={{ color: "#FF0000" }}>{item.description}</Text>
                            <Text style={{ color: "#b83909" }}>{item.full_name}</Text>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurRepresentations;
