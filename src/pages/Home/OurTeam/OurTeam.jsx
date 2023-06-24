import { Link } from "react-router-dom";
import illustration from "../../../assets/undraw_engineering_team_a7n2.svg"

const OurTeam = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 justify-center items-center h-screen max-w-6xl mx-auto">
        <div>
          <h1 className="text-5xl font-bold mb-3">
          Passionate Minds <br />Driving Innovation
          </h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
          Meet the dedicated individuals behind Pendler who are committed to creating a transformative ridesharing experience.
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

export default OurTeam;
