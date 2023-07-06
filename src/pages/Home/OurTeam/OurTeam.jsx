import { Fade } from "react-awesome-reveal";
import CEO from "../../../assets/CEO.jpg"
import COO from "../../../assets/COO.jpg"
import CTO from "../../../assets/CTO.jpg"
import Co_Founder1 from "../../../assets/Co_Founder1.jpg"
import Co_Founder2 from "../../../assets/Co_Founder2.jpg.jpeg"
import { FaUserAlt } from "react-icons/fa";

const OurTeam = ({ title }) => {
  return (
    <div className="mt-6 mb-10">
      {title && (
        <h1 className="text-5xl font-bold mb-3 text-center">
          Passionate Minds Driving Innovation
        </h1>
      )}
      <div className="flex flex-col gap-10 mt-14">
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-60 h-60 shadow-xl hover:shadow-2xl"
                src={CEO}
                alt=""
              />
              <h2 className="text-xl font-bold mt-3">Vishnu Vardhan</h2>
              <p>Co-Founder & CEO</p>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-60 h-60 shadow-xl hover:shadow-2xl"
                src={COO}
                alt=""
              />
              <h2 className="text-xl font-bold mt-3">Likhith Ram</h2>
              <p>Co-Founder & COO</p>
            </div>
          </Fade>
          <Fade direction="left">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-60 h-60 shadow-xl hover:shadow-2xl"
                src={CTO}
                alt=""
              />
              <h2 className="text-xl font-bold mt-3">Prathima Kadari</h2>
              <p>Co-Founder & CTO</p>
            </div>
          </Fade>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          <Fade direction="right">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-60 h-60 shadow-xl hover:shadow-2xl"
                src={Co_Founder1}
                alt=""
              />
              <h2 className="text-xl font-bold mt-3">Sampath Raghavan</h2>
              <p>Co-Founder</p>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-60 h-60 shadow-xl hover:shadow-2xl"
                src={Co_Founder2}
                alt=""
              />
              <h2 className="text-xl font-bold mt-3">Vaibhav</h2>
              <p>Co-Founder</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
