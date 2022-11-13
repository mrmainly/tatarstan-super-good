import { Box } from "@mui/material";
import Slider from "react-slick";

import { PersonCard, PrevArrow, NextArrow } from "../../../../../components";

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

    const personList = [
        {
            img: "/img/Rectangle23.png",
            full_name: "Камальдинов Рамиль Салимджанович",
            description: "Председатель КРОО “КЗРТ”, Совладелец ТД “РегионСнаб”",
        },
        {
            img: "/img/Rectangle24.png",
            full_name: "Михайлов Анатолий Николаевич",
            description:
                "Сопредседатель КРОО “КЗРТ”, Совладелец ТД “РегионСнаб”",
        },
        {
            img: "/img/Rectangle25.png",
            full_name: "Лысенко Григорий Александрович",
            description: "Юрист консульт ТД “РегионСнаб”, КРОО “КЗРТ”",
        },
        {
            img: "/img/Rectangle26.png",
            full_name: "Орлов Владислав Алексеевич",
            description:
                "Руководитель проекта “Вкусняшки от татарина” руководитель департамента делопроизводства ТД “РегионСнаб”",
        },
        {
            img: "/img/Rectangle44.png",
            full_name: "Муравлева Ольга Михайловна",
            description:
                "Руководитель проектов МК “Перспектива ГИСС”, “Презент от Крыма ТД “РегионСнаб””",
        },
    ];

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
