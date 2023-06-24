import { Link } from "react-router-dom";
import illustration from "../../../assets/undraw_city_driver_re_9xyv.svg"

const DriverBenefits = () => {
  return (
    <div className="bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto gap-6">
        <div>
          <h1 className="text-5xl font-bold mb-3 text-white">
          Earn More, <br /> Drive with Pride
          </h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <p className="text-2xl break-words mb-5 text-base-300 font-normal">
          Learn how Pendler empowers drivers with flexible earning opportunities, transparent pay structures, and a supportive community.
          </p>
          <Link>
            <button className="btn btn-primary px-10">Learn More</button>
          </Link>
        </div>
        <div>
          <img className="w-[39rem]" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DriverBenefits;
