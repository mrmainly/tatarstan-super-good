import { useEffect, useState } from "react";

import { Container, Grid, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Title, Line, NewsCard } from "../../../../components";
import ROUTES from "../../../../routes";
import API from "../../../../api";

const News = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countNumber, setCountNumber] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        API.getNews(currentPage).then((res) => {
            console.log("res", res);
            setData(res.data.results);
            setCountNumber(Math.ceil(res.data.count / 2));
        });
    }, [currentPage]);

    // const newsList = [
    //     {
    //         img: "/img/Rectangle68.png",
    //         title: "ВРУЧЕНИЕ НАГРАД КРЫМЧАНАМ",
    //         description: "",
    //         date: "4 ноября 2022 года",
    //         id: 1,
    //     },
    //     {
    //         img: "/img/Rectangle70.png",
    //         title: "ПОДПИСАНИЕ СОГЛАШЕНИЯ О РЕБРЕНДИНГЕ",
    //         description:
    //             "28.10.2022 г. в городе Мелитополе Запорожской области  при участии директора ООО «Торговый дом «РегионСнаб» созданного под патронатом Крымской Региональной Общественной Организации  «Крымское Землячество Республики Татарстан» (КРОО «КЗРТ») Камальдинова Р.С. , впервые в новейшей истории Запорожской области подписано...",
    //         date: "3 ноября 2022 года",
    //         id: 2,
    //     },
    // ];

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
                {data?.map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        key={index}
                        onClick={() =>
                            navigate(ROUTES.NEWS_DETAIL, {
                                state: {
                                    data: item,
                                },
                            })
                        }
                    >
                        <NewsCard {...item} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                style={{ marginTop: 40 }}
                page={currentPage}
                count={countNumber}
                onChange={(event, value) => {
                    setCurrentPage(value);
                }}
            />
        </Container>
    );
};

export default News;
