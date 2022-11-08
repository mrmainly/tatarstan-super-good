import { Container, TextField, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

import { Line, Title } from "../../../../components";

const MyTextField = styled(TextField)`
    .MuiInputBase-root {
        background-color: white;
        width: 100%;
    }
`;

const GridForm = styled(Grid)(({ theme }) => ({
    width: "65%",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const LeaveRequest = () => {
    return (
        <Container
            maxWidth="xl"
            style={{
                marginTop: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Line />
            <Title>ОСТАВЬТЕ ЗАЯВКУ НА СОТРУДНИЧЕСТВО</Title>
            <GridForm container spacing={10}>
                <Grid
                    item
                    style={{ display: "flex", flexDirection: "column" }}
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <MyTextField label="Фамилия" variant="filled" />
                    <MyTextField
                        label="Имя"
                        variant="filled"
                        style={{ marginTop: 20 }}
                    />
                    <MyTextField
                        label="Отчество (при наличии)"
                        variant="filled"
                        style={{ marginTop: 20 }}
                    />
                </Grid>
                <Grid
                    item
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <MyTextField label="Электронная почта" variant="filled" />
                    <MyTextField
                        label="Мобильный телефон"
                        variant="filled"
                        style={{ marginTop: 20 }}
                    />
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <Button
                            style={{
                                background: "#3A586E",
                                boxShadow:
                                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12",
                                borderRadius: 4,
                                color: "white",
                                width: "max-content",
                                marginTop: 40,
                                padding: "10px 15px 10px 15px",
                            }}
                        >
                            ОСТАВИТЬ ЗАЯВКУ
                        </Button>
                    </div>
                </Grid>
            </GridForm>
        </Container>
    );
};

export default LeaveRequest;
