import { Box, Container, MenuItem } from "@mui/material";
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
}));

const OurRepresentations = () => {
    const menuList = [
        {
            label: "Республика Крым",
        },
        {
            label: "Республика Саха (Якутия)",
        },
        {
            label: "Запорожская область",
        },
        {
            label: "Республика Татарстан",
        },
        {
            label: "город Москва",
        },
        {
            label: "Херсонская область",
        },
        {
            label: "Республика Узбекистан",
        },
        {
            label: "Белоруссия",
        },
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
            <Title>НАШИ ПРЕДСТАВИТЕЛЬСТВА</Title>
            <MapWrapper>
                <Menu>
                    {menuList.map((item, index) => (
                        <MenuItem key={index}>
                            <Text
                                style={{
                                    color: "rgba(58, 88, 110, 0.7)",
                                    marginTop: 10,
                                }}
                            >
                                {item.label}
                            </Text>
                        </MenuItem>
                    ))}
                </Menu>
                <img src="/img/Group11.png" alt="" style={{ height: 700 }} />
            </MapWrapper>
        </Container>
    );
};

export default OurRepresentations;
