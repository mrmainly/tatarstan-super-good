import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "../../../../components";

const WrapperContainer = styled(Box)({
    backgroundImage: `url(img/Rectangle71.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: 800,
});

const CusText = styled(Text)({
    fontWeight: 500,
    fontSize: 24,
    fontStyle: "normal",
    color: "white",
    textAlign: "center",
    marginBottom: 104,
});

const StartingElement = () => {
    return (
        <WrapperContainer>
            <Container
                maxWidth="xl"
                sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
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
