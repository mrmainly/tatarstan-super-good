import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "../../../../components";

const WrapperContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(img/Rectangle71.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: 800,
    [theme.breakpoints.down("md")]: {
        marginTop: 110,
    },
}));

const CusText = styled(Text)({
    fontWeight: 500,
    fontSize: 24,
    fontStyle: "normal",
    color: "white",
    textAlign: "center",
    marginBottom: 104,
});

const LogoBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    right: 20,
    marginTop: 20,
}));

const Img = styled("img")(({ theme }) => ({
    width: 300,
    [theme.breakpoints.down("lg")]: {
        width: 200,
    },
    [theme.breakpoints.down("sm")]: {
        width: 100,
    },
}));

const StartingElement = () => {
    return (
        <WrapperContainer>
            <LogoBox>
                {" "}
                <Img src="/img/Group16.svg" alt="" />
                <Img src="/img/Group17.svg" alt="" />
            </LogoBox>
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "100%",
                }}
            >
                <CusText>
                    При патронате Крымской Региональной Общественной Организации
                    <br />
                    “Крымское Землячество Республики Татарстан”
                </CusText>
            </Container>
        </WrapperContainer>
    );
};

export default StartingElement;
