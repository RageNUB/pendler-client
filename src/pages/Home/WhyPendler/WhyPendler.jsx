import { Link } from "react-router-dom";
import illustration from "../../../assets/undraw_subway_-7-vh7.svg"

const WhyPendler = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-5xl font-bold mb-3">
          Seamless, Reliable, <br /> and Convenient
          </h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
          Find out why Pendler is the ultimate choice for your transportation needs, offering a hassle-free and reliable ride experience.
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

export default WhyPendler;
