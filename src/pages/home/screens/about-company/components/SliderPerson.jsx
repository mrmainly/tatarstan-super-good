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
            description: [
               {
                post: "Председатель ",
                label: "КРОО “Крымское Землячество Республики Татарстан”, ",
               },
               {
                post: "Совладелец ",
                label: "ТД “РегионСнаб”, ",
               },
               {
                post: "Председатель ",
                label: "Комиссии “Гранты Инвестиции Субсидии Стартапы” Регионального Отделения Русского Географического Общества в Республике Крым, ",
               },
               {
                post: "Полномочный представитель ",
                label: "ТД “РегионСнаб” по Запорожской и Херсонской области ",
               },
            ],
        },
        {
            img: "/img/Rectangle24.png",
            full_name: "Михайлов Анатолий Николаевич",
            description: [
               {
                post: "Сопредседатель ",
                label: "КРОО “Крымское Землячество Республики Татарстан”, ",
               },
               {
                post: "Совладелец ",
                label: "ТД “РегионСнаб”, ",
               },
               {
                post: "Полномочный представитель ",
                label: "ТД “РегионСнаб” по Республике Саха (Якутия), ",
               },
               {
                post: "Директор ",
                label: "по развитию и продвижению ТД “РегионСнаб”, ",
               },
               {
                post: "Основатель ",
                label: "Аптеки “Виват” в Республике Саха (Якутия)",
               },
            ],
        },
        {
            img: "/img/Rectangle25.png",
            full_name: "Лысенко Григорий Александрович",
            description: [
                {
                 post: "Юрист консульт ",
                 label: "ТД “РегионСнаб”, КРОО “Крымское Землячество Республики Татарстан”, ",
                },
                {
                 post: "Подполковник запаса ",
                 label: "МВД РК",
                },
             ],
        },
        {
            img: "/img/Victor.png",
            full_name: "Белостоцкий Виктор Юрьевич",
            description: [
                {
                 post: "Директор ",
                 label: "по IT технологиям ТД “РегионСнаб”, ",
                },
                {
                 post: "Основатель и генеральный директор ",
                 label: "компании ООО “ОШЕР” в Республике Саха (Якутия)",
                },
             ],
        },
        {
            img: "/img/danya.png",
            full_name: "Романов Даниил Егорович",
            description: [
                {
                 post: "IT технолог ",
                 label: "ТД “РегионСнаб”, ",
                },
                {
                 post: "UX/UI designer ",
                 label: "компании ООО “ОШЕР”",
                },
             ],
        },
        {
            img: "/img/Rectangle26.png",
            full_name: "Орлов Владислав Алексеевич",
            description: [
                {
                 post: "Руководитель проекта ",
                 label: "“Вкусняшки от татарина”, ",
                },
                {
                 post: "Руководитель департамента ",
                 label: "делопроизводства ТД “РегионСнаб”",
                },
             ],
        },
        {
            img: "/img/Rectangle44.png",
            full_name: "Муравлева Ольга Михайловна",
            description: [
                {
                 post: "Руководитель проектов ",
                 label: "МК “Перспектива ГИСС”, “Презент от Крыма ТД “РегионСнаб””",
                },
             ],
        },
        {
            img: "/img/synaa.png",
            full_name: "Айдыс Сынаа Валериевич",
            description: [
                {
                 post: "Полномочный представитель ",
                 label: "ТД “РегионСнаб” по Красноярску, Хакасии, Тыве, ",
                },
                {
                    post: "Председатель ",
                    label: "Тувинского Регионального отделения “Опора России”",
                   },
             ],
        },
        {
            img: "/img/aman.png",
            full_name: "Актаев Аманжол Еркишович",
            description: [
                {
                 post: "Полномочный представитель ",
                 label: "ТД “РегионСнаб” по Казахстану ",
                },
                {
                    post: "Заместитель генерального директора по безопасности ",
                    label: "Строительно Дорожной Компании “Сине Мидас Строй”",
                   },
             ],
        },
        {
            img: "/img/zaglushka.png",
            full_name: "Джураев Бахтиёр Уктамович",
            description: [
                {
                 post: "Полномочный представитель ",
                 label: "ТД “РегионСнаб” по Узбекистану ",
                },
             ],
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
