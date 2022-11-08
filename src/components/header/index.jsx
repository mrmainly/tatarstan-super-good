import { useState } from "react";
import { AppBar, Container, Box, MenuItem, Drawer } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import { Text } from "..";

const NavbarWrapper = styled(AppBar)(({ theme }) => ({
    background: "#FFFFFF",

    [theme.breakpoints.down("md")]: {
        position: "fixed",
        zIndex: 10,
    },
}));

const Navbar = styled(Box)(({ theme }) => ({
    minHeight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
    },
}));

const MenuList = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const MenuListMobile = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        width: 250,
        flexDirection: "column",
        paddingTop: 20,
        paddingLeft: 20,
    },
}));

const Item = styled(Link)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    color: "black",
    textDecoration: "none",
    marginLeft: 5,
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        justifyContent: "start",
        marginTop: 5,
    },
}));

const ButtonShow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
        display: "flex",
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);

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

    const handleOpen = () => {
        setOpen(!open);
    };

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
            <Drawer anchor="right" open={open} onClose={handleOpen}>
                <MenuListMobile>
                    <ButtonShow
                        onClick={handleOpen}
                        style={{ marginBottom: 20 }}
                    >
                        <Hamburger color="black" toggled={open} />
                    </ButtonShow>
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
                </MenuListMobile>
            </Drawer>
            <Container maxWidth="xl">
                <Navbar>
                    <Box>
                        <img
                            src="/img/logo.svg"
                            alt=""
                            style={{ height: 60 }}
                        />
                    </Box>
                    <ButtonShow onClick={handleOpen}>
                        <Hamburger color="black" toggled={open} />
                    </ButtonShow>
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
