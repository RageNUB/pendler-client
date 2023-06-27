import { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import AboutPlatform from "../AboutPlatform/AboutPlatform";
import Articles from "../ArticlesSection/ArticlesSection";
import Banner from "../Banner/Banner";
import DifferentDoing from "../DifferentDoing/DifferentDoing";
import DriverBenefits from "../DriverBenefits/DriverBenefits";
import FAQs from "../FAQs/FAQs";
import OurTeam from "../OurTeam/OurTeam";
import VideoSection from "../VideoSection/VideoSection";
import WhyPendler from "../WhyPendler/WhyPendler";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div data-aos="fade-up">
        <Navbar></Navbar>
      </div>
      <div data-aos="fade-up">
        <DifferentDoing></DifferentDoing>
      </div>
      <div data-aos="fade-up">
        <AboutPlatform></AboutPlatform>
      </div>
      <div data-aos="fade-up">
        <DriverBenefits></DriverBenefits>
      </div>
      <div data-aos="fade-up">
        <WhyPendler></WhyPendler>
      </div>
      <div data-aos="fade-up">
        <OurTeam title={true}></OurTeam>
      </div>
      <div data-aos="fade-up">
        <FAQs></FAQs>
      </div>
      <div data-aos="fade-up">
        <Articles></Articles>
      </div>
      <VideoSection></VideoSection>
    </div>
  );
};

export default Home;
