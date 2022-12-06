import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

import { Text } from "..";
import RegionModal from "../../pages/home/screens/our-representations/components/modals/RegionModal";

const Card = styled(Box)({
  width: 250,
  display: "flex",
  flexDirection: "column",
  marginRight: 28,
  marginLeft: 18,
});

const Img = styled("img")({
  width: "auto",
  height: 250,
  // objectFit: "cover",
});

const FlagsCard = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <RegionModal isOpen={isOpen} setOpen={setOpen} data={data} />
      <Card onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
        <Text
          sx={{
            fontSize: 18,
            fontWeight: 500,
            textAlign: "center",
            height: 56,
            mb: 2.9,
          }}
        >
          {data.region}
        </Text>
        <Img src={data.img} />
        <Text
          sx={{
            fontSize: 14,
            fontWeight: 400,
            textAlign: "center",
            mt: 1.1,
          }}
        >
          {data.full_name}
        </Text>
      </Card>
    </>
  );
};

export default FlagsCard;
