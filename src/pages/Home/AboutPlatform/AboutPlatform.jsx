import { AttentionSeeker, Slide } from "react-awesome-reveal";
import illustration from "../../../assets/undraw_team_spirit_re_yl1v.svg";

const AboutPlatform = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
        <div>
          <Slide direction="left">
          <h1 className="text-5xl font-bold mb-3">
            The Most Cost-Effective <br /> Commuting Solution
          </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
          <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
            With our subscription based system Pendler has the most
            cost-effective pricing mechanism, which benefits both the rider and
            the driver.
          </p>
          </AttentionSeeker>
          {/* <Link>
            <button className="btn btn-primary px-10">Learn More</button>
          </Link> */}
        </div>
        <div>
          <img className="w-[39rem]" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPlatform;
