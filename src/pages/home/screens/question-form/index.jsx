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
            value: ["+7 978 (093) 83-00"],
        },
        {
            img: "/img/sms.svg",
            title: "Электронная почта",
            value: ["tdregionsnab@list.ru"],
        },
        {
            img: "/img/message.svg",
            title: "Вконтакте",
            value: ["tdregionsnab@list.ru", "https://vk.com/id713537371"],
        },
        {
            img: "/img/message.svg",
            title: "Телеграм",
            value: ["https://t.me/+CmyZbX0wKW1hY2Vi"],
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
                            {item.value.map((item, index) => (
                                <Text
                                    key={index}
                                    sx={{
                                        fontSize: 14,
                                        textDecoration: "underline",
                                    }}
                                >
                                    {item}
                                </Text>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
            <Text
                style={{
                    color: "#3A586E",
                    marginTop: 48,
                    textAlign: "center",
                }}
            >
                Оставьте свою электронную почту для информирования Вас о
                компании
                <br /> Торговый Дом “РегионСнаб”
            </Text>
            <EmailTextField label="Электронная почта" />
            <Button
                style={{
                    background: "#3A586E",
                    boxShadow:
                        "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12",
                    borderRadius: 4,
                    color: "white",
                    width: "max-content",
                    marginTop: 20,
                    padding: "10px 15px 10px 15px",
                }}
            >
                Отправить
            </Button>
        </Container>
    );
};

export default QuestionForm;
