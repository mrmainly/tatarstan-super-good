import StartingElement from "./screens/starting-element";
import AboutCompany from "./screens/about-company";
import News from "./screens/news";
import OurPartners from "./screens/our-partners";
import LeaveRequest from "./screens/leave-a-request";

const Home = () => {
    return (
        <div>
            <StartingElement />
            <AboutCompany />
            <News />
            <OurPartners />
            <LeaveRequest />
        </div>
    );
};

export default Home;
