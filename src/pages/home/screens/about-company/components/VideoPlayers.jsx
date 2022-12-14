import { useState } from "react";
import ReactPlayer from "react-player";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "../../../../../components";

const WrapperVideoPlayer = styled(Grid)(({ theme }) => ({
    height: 700,
    [theme.breakpoints.down("sm")]: {
        height: 400,
    },
}));

const VideoCard = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
}));

const VideoPlayers = () => {
    const [videoController, setVideoController] = useState([
        {
            id: 1,
            url: "https://youtu.be/wAdZ5NAsC4Y",
            type: "video",
            description:
                "Интервью с Рамилем Камальдиновым на выставке Urban Forum в онлайн-студии",
            img: "/img/image212320.png",
        },
        {
            id: 2,
            url: "https://youtu.be/bOV8_P9f3xY",
            type: "card",
            description:
                'Инвестиции в Крым. Интервью с Камальдиновым Рамилем Салимджановичем, директором ТД "РегионСнаб".',
            img: "/img/image212327.svg",
        },
        {
            id: 3,
            url: "https://youtu.be/0OYxG6KcZvk",
            type: "card",
            description: "Еженедельный бюллетень №38 от 20.05.2022 г.",
            img: "/img/image212328.svg",
        },
    ]);

    const selectVideo = (id) => {
        const newArray = videoController.map((item) =>
            item.id === id
                ? { ...item, type: "video" }
                : { ...item, type: "card" }
        );
        setVideoController(newArray);
    };

    return (
        <Grid container spacing={2} style={{ marginTop: 60 }}>
            <WrapperVideoPlayer item xs={12} sm={12} md={9} lg={9} xl={9}>
                {videoController.map((item, index) => {
                    if (item.type === "video") {
                        return (
                            <ReactPlayer
                                key={index}
                                url={item.url}
                                controls={true}
                                playing={false}
                                width="100%"
                                height="100%"
                            />
                        );
                    }
                })}
            </WrapperVideoPlayer>
            <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                style={{ marginTop: "-10px" }}
            >
                <Grid container spacing={2}>
                    {videoController.map((item, index) => {
                        if (item.type === "card") {
                            return (
                                <VideoCard
                                    xs={12}
                                    sm={6}
                                    md={12}
                                    lg={12}
                                    xl={12}
                                    key={index}
                                    item
                                    style={{ marginTop: 10 }}
                                    onClick={() => {
                                        selectVideo(item.id);
                                    }}
                                >
                                    <img
                                        src={item.img}
                                        style={{
                                            width: "100%",
                                            height: 200,
                                            objectFit: "cover",
                                        }}
                                        alt=""
                                    />
                                    <div
                                        style={{
                                            padding: 5,
                                            border: "0.5px solid #000000",
                                            borderTop: "none",
                                            height: "max-content",
                                            marginTop: "-5px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Text>{item.description}</Text>
                                    </div>
                                </VideoCard>
                            );
                        }
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default VideoPlayers;
