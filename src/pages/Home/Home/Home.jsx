import AboutPlatform from "../AboutPlatform/AboutPlatform";
import DifferentDoing from "../DifferentDoing/DifferentDoing";
import DriverBenefits from "../DriverBenefits/DriverBenefits";
import EarlyBirdForm from "../EarlyBirdForm/EarlyBirdForm";
import FAQs from "../FAQs/FAQs";
import OurTeam from "../OurTeam/OurTeam";
import WhyPendler from "../WhyPendler/WhyPendler";

const Home = () => {
    return (
        <div>
            <EarlyBirdForm></EarlyBirdForm>
            <AboutPlatform></AboutPlatform>
            <DifferentDoing></DifferentDoing>
            <WhyPendler></WhyPendler>
            <DriverBenefits></DriverBenefits>
            <OurTeam></OurTeam>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;