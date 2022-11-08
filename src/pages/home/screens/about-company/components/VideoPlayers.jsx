import { useState } from "react";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "../../../../../components";

const WrapperVideoPlayer = styled(Grid)(({ theme }) => ({
    height: 700,
}));

const VideoCard = styled(Grid)(({ theme }) => ({
    cursor: "pointer",
}));

const VideoPlayers = () => {
    const [videoController, setVideoController] = useState([
        {
            id: 1,
            url: "https://youtu.be/5rnE7V4D7U4",
            type: "video",
            description:
                "asdasdasdas asdasdasd asdasdasd asd asd asd asdasdasda asdas asdasdasd asdasd asd asdasd sdadasd",
            img: "/img/Rectangle44.png",
        },
        {
            id: 2,
            url: "https://youtu.be/96wAb6dx2L8?list=PLcjPlJ1X9EHa0SPHppjp8sVdN21e8Ifqa",
            type: "card",
            description:
                'Инвестиции в Крым. Интервью с Камальдиновым Рамилем Салимджановичем, директором ТД "РегионСнаб".',
            img: "/img/Rectangle71.png",
        },
        {
            id: 3,
            url: "https://youtu.be/vhQc26FTsYE",
            type: "card",
            description: "Еженедельный бюллетень №38 от 20.05.2022 г.",
            img: "/img/Rectangle26.png",
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
            <WrapperVideoPlayer item xs={9}>
                {videoController.map((item, index) => {
                    if (item.type === "video") {
                        return (
                            <ReactPlayer
                                key={index}
                                url={item.url}
                                controls={true}
                                playing={true}
                                width="100%"
                                height="100%"
                            />
                        );
                    }
                })}
            </WrapperVideoPlayer>
            <Grid item xs={3} style={{ marginTop: "-10px" }}>
                {videoController.map((item, index) => {
                    if (item.type === "card") {
                        return (
                            <VideoCard
                                key={index}
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
    );
};

export default VideoPlayers;
