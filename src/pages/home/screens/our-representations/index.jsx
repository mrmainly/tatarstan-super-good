import { Container } from "@mui/material";
import { styled } from "@mui/system";
import SliderFlags from "./components/SliderFlags";

const ContainerOurRepresentations = styled(Container)({
    marginTop: 100,
});

const OurRepresentations = () => {
    return (
        <div id="about">
            <ContainerOurRepresentations maxWidth="xl">
                <SliderFlags />
            </ContainerOurRepresentations>
        </div>
    );
};

export default OurRepresentations;
