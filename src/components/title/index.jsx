import { Text } from "..";

const Title = ({ children }) => {
    return (
        <Text
            sx={{
                color: "#3A586E",
                fontSize: 48,
                fontWeight: 500,
                mb: 6,
            }}
        >
            {children}
        </Text>
    );
};

export default Title;
