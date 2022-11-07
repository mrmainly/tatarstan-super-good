import { useState } from "react";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Text } from "../../../../../components";

const WrapperVideoPlayer = styled(Grid)(({ theme }) => ({
    height: 500,
}));

const VideoCard = styled(Grid)(({ theme }) => ({
    height: 208,
    border: "0.5px solid #000000",
    cursor: "pointer",
    overflow: "hidden",
    paddingBottom: 5,
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
            url: "https://youtu.be/EaG60nAEtcE",
            type: "card",
            description: "asdasdasdas asdasdasd",
            img: "/img/Rectangle71.png",
        },
        {
            id: 3,
            url: "https://youtu.be/qRTvfpzo-Mg",
            type: "card",
            description: "asdasdasdas asdasdasd",
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
                                    style={{ width: "100%", height: 130 }}
                                    alt=""
                                />
                                <div style={{ padding: 5 }}>
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
