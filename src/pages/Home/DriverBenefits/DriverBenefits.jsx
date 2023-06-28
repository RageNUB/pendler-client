import { AttentionSeeker, Slide } from "react-awesome-reveal";
import illustration from "../../../assets/undraw_city_driver_re_9xyv.svg";

const DriverBenefits = () => {
  return (
    <div className="bg-slate-900 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto gap-6">
        <div>
          <img className="w-[39rem]" src={illustration} alt="" />
        </div>
        <div>
          <Slide direction="right">
          <h1 className="text-5xl font-bold mb-3 text-white">
            Unlocking a new era of ride-sharing, where everyone wins.
          </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
          <p className="text-2xl break-words mb-5 text-base-300 font-normal">
            Experience a ride-sharing revolution with Pendler, where drivers and
            riders both benefit, creating a win-win situation for all.
          </p>
          </AttentionSeeker>
          {/* <Link>
            <button className="btn btn-primary px-10">Learn More</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DriverBenefits;
