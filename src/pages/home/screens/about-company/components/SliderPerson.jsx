import { Box } from "@mui/material";
import Slider from "react-slick";

import { PersonCard, PrevArrow, NextArrow } from "../../../../../components";
import { personList } from "../../../../../data";

const SliderPerson = () => {
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
        {personList?.map((item, index) => (
          <Box style={{ background: "red" }} key={index}>
            <PersonCard
              img={item.img}
              full_name={item.full_name}
              description={item.description}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderPerson;
