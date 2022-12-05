import { Box } from "@mui/material";
import Slider from "react-slick";

import { PersonCard, PrevArrow, NextArrow, FlagsCard } from "../../../../../components";

const SliderFlags = () => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        swipeToSlide: true,
        infinite: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const flagsList = [
        {
            img: "/img/krum.png",
            full_name: "Камальдинов Рамиль Салимджанович",
            region: "РЕСПУБЛИКА КРЫМ",
        },
        {
            img: "/img/zap.png",
            full_name: "Камальдинов Рамиль Салимджанович",
            region: "ЗАПОРОЖСКАЯ ОБЛАСТЬ",
        },
        {
            img: "/img/herson.png",
            full_name: "Камальдинов Рамиль Салимджанович",
            region: "ХЕРСОНСКАЯ ОБЛАСТЬ",
        },
        {
            img: "/img/krsnk.png",
            full_name: "Айдыс Сынаа Валериевич",
            region: "ХЕРСОНСКАЯ ОБЛАСТЬ",
        },
        {
            img: "/img/tuva.png",
            full_name: "Айдыс Сынаа Валериевич",
            region: "РЕСПУБЛИКА ТЫВА",
        },
        {
            img: "/img/hakas.png",
            full_name: "Айдыс Сынаа Валериевич",
            region: "РЕСПУБЛИКА ХАКАСИЯ",
        },
        {
            img: "/img/kaz.png",
            full_name: "Актаев Аманжол Еркишович",
            region: "КАЗАХСТАН",
        },
        {
            img: "/img/rsya.png",
            full_name: "Михайлов Анатолий Николаевич",
            region: "РЕСПУБЛИКА САХА (ЯКУТИЯ)",
        },
        {
            img: "/img/uzb.png",
            full_name: "Представительство",
            region: "УЗБЕКИСТАН",
        },
        {
            img: "/img/mcs.png",
            full_name: "Представительство",
            region: "МОСКВА",
        },
        {
            img: "/img/bel.png",
            full_name: "Представительство",
            region: "БЕЛОРУССИЯ",
        },
        {
            img: "/img/ch.png",
            full_name: "Представительство",
            region: "КИТАЙ",
        },
        {
            img: "/img/mong.png",
            full_name: "Представительство",
            region: "МОНГОЛИЯ",
        },
        {
            img: "/img/pr.png",
            full_name: "Представительство",
            region: "ПРАГА",
        },
        {
            img: "/img/Pol.png",
            full_name: "Представительство",
            region: "ПОЛЬША",
        },
        {
            img: "/img/penz.png",
            full_name: "Представительство",
            region: "ПЕНЗА",
        },
    ];

    return (
        <Box sx={{ mt: 10 }}>
            <Slider {...settings}>
                {flagsList?.map((item, index) => (
                    <Box style={{ background: "red" }} key={index}>
                        <FlagsCard
                            img={item.img}
                            region={item.region}
                            full_name={item.full_name}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default SliderFlags;
