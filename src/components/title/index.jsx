import { styled } from "@mui/system";

import { Text } from "..";

const CusyomTitle = styled(Text)(({ theme }) => ({
    color: "#3A586E",
    fontSize: 48,
    fontWeight: 500,
    marginBottom: 60,
    [theme.breakpoints.down("md")]: {
        fontSize: 35,
        textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 30,
    },
    [theme.breakpoints.down(340)]: {
        fontSize: 25,
    },
}));

const Title = ({ children }) => {
    return <CusyomTitle>{children}</CusyomTitle>;
};

export default Title;
