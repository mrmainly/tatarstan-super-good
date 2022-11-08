import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

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

const NewsDetail = () => {
    const navigate = useNavigate();

    const settings = {
        dots: false,
        centerPadding: "0px",
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    const list = [
        { img: "/img/Frame3556.png" },
        { img: "/img/Frame3556.png" },
        { img: "/img/Frame3556.png" },
    ];
    return (
        <>
            <Box sx={{ bgcolor: "#059B3D", height: 15, width: "100%" }}></Box>
            <Box
                sx={{
                    bgcolor: "#EA181E",
                    height: 15,
                    width: "100%",
                    marginTop: 0.5,
                }}
            ></Box>
            <Container
                style={{ minHeight: 800, color: "black", paddingTop: 40 }}
            >
                <Box style={{ display: "flex" }}>
                    <Navigator onClick={() => navigate(ROUTES.HOME)}>
                        Главная
                    </Navigator>
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
                    ВРУЧЕНИЕ НАГРАД КРЫМЧАНАМ
                </Text>
                <Text
                    style={{
                        color: "#3A586E",
                        fontWeight: 300,
                        fontSize: 14,
                        marginBottom: 22,
                    }}
                >
                    4 ноября 2022 года
                </Text>
                <Slider {...settings}>
                    {list.map((item, index) => (
                        <Box key={index}>
                            <img
                                src={item.img}
                                alt=""
                                style={{
                                    width: "98%",
                                    height: 500,
                                    objectFit: "cover",
                                    margin: "0 auto",
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
                <Text style={{ fontSize: 20, color: "#3A586E", marginTop: 20 }}>
                    {" "}
                    В преддверии Дня народного единства Глава администрации
                    города Симферополь Афанасьев Михаил Сергеевич вручил награды
                    крымчанам, внëсшим значительный вклад и активное участие в
                    жизни города. Этот праздник связан с важным историческим
                    периодом нашей страны. Для нас, для всего нашего народа он
                    имеет сакральный смысл. Именно в периоды народного единства,
                    нашего единения происходили самые великие победы в нашей
                    истории. Михаил Афанасьев поздравил награждённых , пожелал
                    здоровья и мира, а России — скорейшей победы в специальной
                    военной операции!!!
                </Text>
            </Container>
        </>
    );
};

export default NewsDetail;
