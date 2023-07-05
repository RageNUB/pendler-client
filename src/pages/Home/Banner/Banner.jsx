import { Link } from "react-router-dom";
import NavbarHome from "../../../components/NavbarHome.jsx/NavbarHome";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-center banner flex flex-col justify-between items-center pt-8 px-2">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-14 mt-14">Welcome to PENDLER</h1>
          <div className="flex gap-5 justify-center lg:-ml-14">
            <Link to="/drivers">
              <button className="btn btn-primary rounded-3xl mb-10 px-8">
                Sign Up To Drive
              </button>
            </Link>
            <Link to="/users">
              <button className="btn btn-primary rounded-3xl mb-10 px-8">
                Sign Up as Rider
              </button>
            </Link>
          </div>
          <p className="text-3xl font-medium mt-14 lg:-ml-14">
            Discover how pendler is <br /> revolutionizing the Commuting sector
          </p>
        </div>
        {/* <p className="text-7xl text-error"><FaArrowDown></FaArrowDown></p> */}
      </div>
      <NavbarHome></NavbarHome>
    </div>
  );
};

export default Banner;
