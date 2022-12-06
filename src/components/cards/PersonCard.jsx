import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "..";

const Card = styled(Box)({
  width: 250,
  display: "flex",
  flexDirection: "column",
  marginRight: 28,
  marginLeft: 18,
});

const Img = styled("img")({
  width: "100%",
  height: 300,
  objectFit: "cover",
});

const PersonCard = ({ img, full_name, description }) => {
  return (
    <Card>
      <Img src={img} />
      <Text
        sx={{
          fontSize: 18,
          fontWeight: 500,
          textAlign: "center",
          mt: 1.4,
        }}
      >
        {full_name}
      </Text>
      <Box>
        {description?.map((item, index) => (
          <Text
            key={index}
            sx={{
              fontSize: 14,
              fontWeight: 400,
              textAlign: "center",
              mt: 0.2,
            }}
          >
            <strong>{item.post}</strong>
            {item.label}
          </Text>
        ))}
      </Box>
    </Card>
  );
};

export default PersonCard;
