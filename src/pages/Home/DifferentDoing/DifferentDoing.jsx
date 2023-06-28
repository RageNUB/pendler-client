import illustration from "../../../assets/undraw_order_ride_re_372k.svg";
import { Slide, AttentionSeeker } from "react-awesome-reveal";

const DifferentDoing = () => {
  return (
    <div className="bg-slate-900 mt-3 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
        <div>
          <img className="w-[39rem]" src={illustration} alt="" />
        </div>
        <div>
          <Slide direction="right">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Discover a Seamless <br /> Ride Experience
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Welcome to Pendler - your go-to ride-sharing platform for seamless
              travel. Explore user-centric features and see why Pendler is your
              preferred choice.
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

export default DifferentDoing;
