import { Container, Grid, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Title, Line, NewsCard } from "../../../../components";
import ROUTES from "../../../../routes";

const News = () => {
    const navigate = useNavigate();

    const newsList = [
        {
            img: "/img/Rectangle68.png",
            title: "ВРУЧЕНИЕ НАГРАД КРЫМЧАНАМ",
            description:
                "В преддверии Дня народного единства   Глава администрации города Симферополь Афанасьев Михаил Сергеевич вручил награды крымчанам, внëсшим значительный вклад и активное участие в жизни города. Этот праздник связан с важным историческим периодом нашей страны. Для нас, для всего нашего  народа он имеет са...",
            date: "4 ноября 2022 года",
            id: 1,
        },
        {
            img: "/img/Rectangle70.png",
            title: "ПОДПИСАНИЕ СОГЛАШЕНИЯ О РЕБРЕНДИНГЕ",
            description:
                "28.10.2022 г. в городе Мелитополе Запорожской области  при участии директора ООО «Торговый дом «РегионСнаб» созданного под патронатом Крымской Региональной Общественной Организации  «Крымское Землячество Республики Татарстан» (КРОО «КЗРТ») Камальдинова Р.С. , впервые в новейшей истории Запорожской области подписано...",
            date: "3 ноября 2022 года",
            id: 2,
        },
    ];

    return (
        <Container
            id="news"
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
            <Grid container spacing={2}>
                {newsList.map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        key={index}
                        onClick={() => navigate(ROUTES.NEWS_DETAIL)}
                    >
                        <NewsCard {...item} />
                    </Grid>
                ))}
            </Grid>
            <Pagination style={{ marginTop: 40 }} />
        </Container>
    );
};

export default News;
