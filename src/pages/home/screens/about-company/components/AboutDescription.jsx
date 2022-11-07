import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import { Text, Title, Line } from "../../../../../components";

const Description = styled(Text)({
    fontWeight: 400,
    fontSize: 20,
    textAlign: "justify",
    color: "rgba(58, 88, 110, 0.7);",
    width: "90%",
});

const ListWrapper = styled(Box)({
    width: "80%",
    marginTop: 60,
});

const WrapperDescription = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
});

const AboutDescription = () => {
    const list = [
        "Реализация стройматериалов на объекты Фелеральной Целевой Программы по Республике Крым и других регионов;",
        "Дистрибьюция заводов изготовителей и производителей строительных материалов;",
        "Дистрибьюция заводов и производителей пищевой продукции;",
        "Логистические хабы для строительных материалов и пищевой продукции в регионах страны",
        "Ребрендинг продукции уже существующих заводов и фабрик.",
    ];
    return (
        <WrapperDescription>
            <Line />
            <Title>О КОМПАНИИ</Title>
            <Description>
                Торговый Дом «РегионСнаб» организован под патронатом Крымской
                Региональной Общественной Организации “Крымское Землячество
                Республики Татарстан” и осуществляет следующие виды
                деятельности:
            </Description>
            <ListWrapper>
                {list.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            color: "rgba(58, 88, 110, 0.7)",
                            fontFamily: "Roboto",
                            fontSize: 20,
                            fontWeight: 400,
                            marginTop: 15,
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ListWrapper>
        </WrapperDescription>
    );
};

export default AboutDescription;
