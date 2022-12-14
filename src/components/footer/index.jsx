import { Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import { Text } from "..";
import ROUTES from "../../routes";

const MenuList = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const Item = styled(HashLink)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    color: "black",
    textDecoration: "none",
    marginLeft: 5,
}));

const Footer = () => {
    const location = useLocation();

    const items = [
        {
            label: "О НАС",
            path: "#about",
        },
        {
            label: "ПРЕДСТАВИТЕЛЬСТВА",
            path: "#our-representations",
        },
        {
            label: "НОВОСТИ",
            path: "#news",
        },
        {
            label: "ПРОДУКЦИИ",
            path: "#products",
        },
        {
            label: "ПАРТНЕРЫ",
            path: "#partners",
        },
        {
            label: "ЗАЯВКА",
            path: "#request",
        },
    ];
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.25)",
                marginTop: 64,
            }}
        >
            <Box sx={{ bgcolor: "#059B3D", height: 15, width: "100%" }}></Box>
            <Box
                sx={{
                    bgcolor: "#EA181E",
                    height: 15,
                    width: "100%",
                    marginTop: 0.5,
                }}
            ></Box>
            {location.pathname === ROUTES.HOME && (
                <MenuList>
                    {items.map((item, index) => (
                        <Item to={item.path} key={index}>
                            <MenuItem>
                                <Text
                                    style={{
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: 14,
                                    }}
                                >
                                    {item.label}
                                </Text>
                            </MenuItem>
                        </Item>
                    ))}
                </MenuList>
            )}
            <Text
                style={{
                    fontWeight: "600",
                    fontSize: 14,
                    color: "black",
                    fontStyle: "normal",
                    textAlign: "center",
                    marginTop: 23,
                }}
            >
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ТОРГОВЫЙ ДОМ
                "РЕГИОНСНАБ"
                <br />
                ИНН 9102274102/КПП 910201001 ОГРН 1219100009127
            </Text>
            <img
                src="/img/logo.svg"
                alt=""
                style={{
                    width: 69,
                    height: 107,
                    marginTop: 20,
                    marginBottom: 20,
                }}
            />
            <Text
                style={{
                    fontWeight: "600",
                    fontSize: 12,
                    color: "black",
                    fontStyle: "normal",
                    textAlign: "center",
                    marginBottom: 15,
                }}
            >
                ООО ТОРГОВЫЙ ДОМ "РЕГИОНСНАБ". Все права защищены.
            </Text>
        </Box>
    );
};

export default Footer;
