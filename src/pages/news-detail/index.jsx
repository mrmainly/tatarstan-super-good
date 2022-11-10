import { useState } from "react";
import { Box, Container, Dialog } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import esLocale from "moment/locale/ru";

import { Text, PrevArrow, NextArrow } from "../../components";
import ROUTES from "../../routes";

const Navigator = styled(Text)(({ theme }) => ({
    marginRight: 5,
    cursor: "pointer",
    transition: "all 1s ease",
    fontWeight: 500,
    color: "#838383",
    "&:hover": {
        color: "#3A586E",
    },
}));

const Img = styled("img")(({ theme }) => ({
    width: "98%",
    height: 500,
    objectFit: "cover",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
        height: "auto",
    },
    [theme.breakpoints.down("sm")]: {},
}));

const NewsDetail = () => {
    const [img, setImg] = useState("");
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state;

    const { data } = state;

    const settings = {
        dots: false,
        centerPadding: "0px",
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" open={open} onClose={handleClose}>
                <img src={img} style={{ width: "100%", height: "auto" }} alt="" />
            </Dialog>
            <Box sx={{ bgcolor: "#059B3D", height: 15, width: "100%" }}></Box>
            <Box
                sx={{
                    bgcolor: "#EA181E",
                    height: 15,
                    width: "100%",
                    marginTop: 0.5,
                }}
            ></Box>
            <Container style={{ minHeight: 800, color: "black", paddingTop: 40 }}>
                <Box style={{ display: "flex" }}>
                    <Navigator onClick={() => navigate(ROUTES.HOME)}>Главная</Navigator>
                    <Text style={{ color: "#3A586E" }}>/</Text>
                    <Text
                        className="news"
                        style={{
                            marginLeft: 5,
                            color: "#3A586E",
                            fontWeight: 500,
                            transition: "all 1s ease",
                        }}
                    >
                        Новости
                    </Text>
                </Box>
                <Text
                    style={{
                        color: "#3A586E",
                        fontWeight: 500,
                        fontSize: 22,
                        marginTop: 5,
                        marginBottom: 5,
                    }}
                >
                    {data?.title}
                </Text>
                <Text
                    style={{
                        color: "#3A586E",
                        fontWeight: 300,
                        fontSize: 14,
                        marginBottom: 22,
                    }}
                >
                    {moment(data.pub_date, "YYYY-MM-DD").locale("ru").format("DD MMMM YYYY")}
                </Text>
                <Slider {...settings}>
                    {data.image.map((item, index) => (
                        <Box key={index}>
                            <Img
                                src={`http://127.0.0.1:8000${item.image}`}
                                alt=""
                                onClick={() => {
                                    setImg(`http://127.0.0.1:8000${item.image}`);
                                    setOpen(true);
                                }}
                            />
                        </Box>
                    ))}
                </Slider>

                <div style={{ fontSize: 20, color: "#3A586E", marginTop: 20, wordWrap: "break-word", overflow: "hidden" }} dangerouslySetInnerHTML={{ __html: data.full_desc }}></div>
            </Container>
        </>
    );
};

export default NewsDetail;
