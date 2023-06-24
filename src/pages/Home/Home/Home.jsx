import AboutPlatform from "../AboutPlatform/AboutPlatform";
import Articles from "../Articles/Articles";
import DifferentDoing from "../DifferentDoing/DifferentDoing";
import DriverBenefits from "../DriverBenefits/DriverBenefits";
import FAQs from "../FAQs/FAQs";
import OurTeam from "../OurTeam/OurTeam";
import VideoSection from "../VideoSection/VideoSection";
import WhyPendler from "../WhyPendler/WhyPendler";

const Home = () => {
    return (
        <div>
            <AboutPlatform></AboutPlatform>
            <DifferentDoing></DifferentDoing>
            <WhyPendler></WhyPendler>
            <DriverBenefits></DriverBenefits>
            <OurTeam></OurTeam>
            <FAQs></FAQs>
            <Articles></Articles>
            <VideoSection></VideoSection>
        </div>
    );
};

export default Home;