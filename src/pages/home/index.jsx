import StartingElement from "./screens/starting-element";
import AboutCompany from "./screens/about-company";
import News from "./screens/news";
import OurPartners from "./screens/our-partners";
import LeaveRequest from "./screens/leave-a-request";
import OurProducts from "./screens/our-products";
import QuestionForm from "./screens/question-form";
import OurRepresentations from "./screens/our-representations";

const Home = () => {
    return (
        <div>
            <StartingElement />
            <AboutCompany />
            <OurRepresentations />
            <News />
            <OurProducts />
            <OurPartners />
            <LeaveRequest />
            <QuestionForm />
        </div>
    );
};

export default Home;
