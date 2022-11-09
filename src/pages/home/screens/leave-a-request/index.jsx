import { useState } from "react";
import { Container, TextField, Grid, Button, Box, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/system";

import { Line, Title } from "../../../../components";
import API from "../../../../api";

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

const ButtonWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
}));

const MyTextFieldFirstItem = styled(MyTextField)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        marginTop: 20,
    },
}));

const GridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        width: "100%",
    },
}));

const LeaveRequest = () => {
    const [surname, setSurname] = useState("");
    const [firstName, setFirstName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState();
    const [text, setText] = useState("");

    const onSubmit = () => {
        if (surname !== "" && firstName !== "" && patronymic !== "" && phone !== "" && phone !== "") {
            API.postLeave({ surname: surname, first_name: firstName, patronymic: patronymic, phone: phone, email: email })
                .then((res) => {
                    setOpen(true);
                    setStatus("success");
                    setText("Ваша заявка на сотрудничество отправлена");
                    setSurname("");
                    setFirstName("");
                    setPatronymic("");
                    setPhone("");
                    setEmail("");
                })
                .catch((error) => {
                    setOpen(true);
                    setStatus("error");
                    setText("Введите правильный адрес электронной почты.");
                });
        } else {
            setOpen(true);
            setStatus("error");
            setText("Все поля должны быть запольнены");
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Container
            id="request"
            maxWidth="xl"
            style={{
                marginTop: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
                    {text}
                </Alert>
            </Snackbar>
            <Line />
            <Title>ОСТАВЬТЕ ЗАЯВКУ НА СОТРУДНИЧЕСТВО</Title>
            <GridForm container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                    <GridItem>
                        <MyTextField label="Фамилия" variant="filled" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        <MyTextField label="Имя" variant="filled" style={{ marginTop: 20 }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <MyTextField label="Отчество (при наличии)" variant="filled" style={{ marginTop: 20 }} value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
                    </GridItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
                    <GridItem>
                        <MyTextFieldFirstItem label="Электронная почта" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <MyTextField label="Мобильный телефон" variant="filled" style={{ marginTop: 20 }} value={phone} onChange={(e) => setPhone(e.target.value)} type="number" />
                        <ButtonWrapper>
                            <Button
                                style={{
                                    background: "#3A586E",
                                    boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12",
                                    borderRadius: 4,
                                    color: "white",
                                    width: "max-content",
                                    marginTop: 40,
                                    padding: "10px 15px 10px 15px",
                                }}
                                onClick={onSubmit}
                            >
                                ОСТАВИТЬ ЗАЯВКУ
                            </Button>
                        </ButtonWrapper>
                    </GridItem>
                </Grid>
            </GridForm>
        </Container>
    );
};

export default LeaveRequest;
