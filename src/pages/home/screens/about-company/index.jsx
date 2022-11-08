import { Container } from "@mui/material";
import { styled } from "@mui/system";

import AboutDescription from "./components/AboutDescription";
import SliderPerson from "./components/SliderPerson";
import VideoPlayers from "./components/VideoPlayers";

const ContainerAbout = styled(Container)({
    marginTop: 100,
});

const AboutCompany = () => {
    return (
        <ContainerAbout maxWidth="xl">
            <AboutDescription />
            <SliderPerson />
            <VideoPlayers />
        </ContainerAbout>
    );
};

export default AboutCompany;
