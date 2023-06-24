import illustration from "../../../assets/undraw_order_ride_re_372k.svg"

import { Link } from "react-router-dom";

const DifferentDoing = () => {
  return (
    <div className="bg-slate-900">
      <div className="lg:grid lg:grid-cols-2 justify-center items-center h-screen max-w-6xl mx-auto">
        <div>
          <h1 className="text-5xl font-bold mb-3 text-white">
          Redefining the <br /> Ridesharing Experience
          </h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <p className="text-2xl break-words mb-5 text-base-300 font-normal">
          Explore what sets Pendler apart from other platforms and how we&apos;re redefining the way you ride.
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

export default DifferentDoing;
