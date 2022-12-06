import { Box } from "@mui/material";
import Slider from "react-slick";

import {
  PersonCard,
  PrevArrow,
  NextArrow,
  FlagsCard,
} from "../../../../../components";
import { flagsList } from "../../../../../data";

const SliderFlags = () => {
  const settings = {
    dots: false,
    centerPadding: "0px",
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    infinite: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Slider {...settings}>
        {flagsList?.map((item, index) => (
          <Box style={{ background: "red" }} key={index}>
            <FlagsCard data={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderFlags;
