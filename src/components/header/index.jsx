import { AppBar, Container, Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import { Text } from "..";

const NavbarWrapper = styled(AppBar)({
    background: "#FFFFFF",
});

const Navbar = styled(Box)(({ theme }) => ({
    minHeight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    // [theme.breakpoints.down("md")]: {
    //     flexDirection: "column",
    //     alignItems: "start",
    // },
}));

const MenuList = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
}));

const Item = styled(Link)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    color: "black",
    textDecoration: "none",
    marginLeft: 5,
}));

const Header = () => {
    const items = [
        {
            label: "О НАС",
            path: "/",
        },
        {
            label: "ПРЕДСТАВИТЕЛЬСТВА",
            path: "/",
        },
        {
            label: "НОВОСТИ",
            path: "/",
        },
        {
            label: "ПРОДУКЦИИ",
            path: "/",
        },
        {
            label: "ПАРТНЕРЫ",
            path: "/",
        },
        {
            label: "ЗАЯВКА",
            path: "/",
        },
    ];

    return (
        <NavbarWrapper position="relative">
            <Box sx={{ bgcolor: "#059B3D", height: 15, width: "100%" }}></Box>
            <Box
                sx={{
                    bgcolor: "#EA181E",
                    height: 15,
                    width: "100%",
                    marginTop: 0.5,
                }}
            ></Box>
            <Container maxWidth="xl">
                <Navbar>
                    <Box>
                        <img src="/img/ao.png" alt="" />
                    </Box>
                    <MenuList>
                        {items.map((item, index) => (
                            <Item to={item.path} key={index}>
                                <MenuItem>
                                    <Text
                                        sx={{
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item.label}
                                    </Text>
                                </MenuItem>
                            </Item>
                        ))}
                    </MenuList>
                </Navbar>
            </Container>
        </NavbarWrapper>
    );
};

export default Header;
