import { Container, Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

import { Line, Title, Text } from "../../../../components";

const EmailTextField = styled(TextField)(({ theme }) => ({
    marginTop: 20,
    width: 620,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const QuestionForm = () => {
    const questionList = [
        {
            img: "/img/phone.svg",
            title: "Звонок по России",
            values: [{ value: "+7 978 (093) 83-00", type: "phone" }],
        },
        {
            img: "/img/sms.svg",
            title: "Электронная почта",
            values: [{ value: "tdregionsnab@list.ru" }],
        },
        {
            img: "/img/message.svg",
            title: "Вконтакте",
            values: [{ value: "https://vk.com/club181465754" }, { value: "https://vk.com/id713537371" }],
        },
        {
            img: "/img/message.svg",
            title: "Телеграм",
            values: [{ value: "https://t.me/+CmyZbX0wKW1hY2Vi" }],
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
            <Title>ОСТАЛИСЬ ВОПРОСЫ?</Title>
            <Text style={{ marginTop: "-50px", textAlign: "center" }}>
                Свяжитесь с нами любым удобным способом и мы ответим на все
                <br />
                интересующие Вас вопросы.
            </Text>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                }}
            >
                {questionList.map((item, index) => (
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 20,
                        }}
                        key={index}
                    >
                        <img src={item.img} alt="" />
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: 20,
                            }}
                        >
                            <Text sx={{ color: "#3A586E" }}>{item.title}</Text>
                            {item.values.map((item, index) => (
                                <div key={index}>
                                    {item.type === "phone" ? (
                                        <a
                                            style={{
                                                fontSize: 14,
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                                color: "black",
                                            }}
                                            href={`tel:${item.value}`}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <Text
                                            sx={{
                                                fontSize: 14,
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => (window.location.href = item.value)}
                                        >
                                            {item.value}
                                        </Text>
                                    )}
                                </div>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default QuestionForm;
