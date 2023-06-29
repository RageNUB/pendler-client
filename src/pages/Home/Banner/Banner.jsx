import { Link } from "react-router-dom";
import NavbarHome from "../../../components/NavbarHome.jsx/NavbarHome";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-center banner flex flex-col justify-between items-center pt-8 mb-8">
        <div>
          <h1 className="text-7xl font-bold mb-14 mt-14">Welcome to PENDLER</h1>
          <div className="flex gap-5 justify-center -ml-14">
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
          <p className="text-3xl font-medium mt-14 -ml-14">
            Discover how pendler is <br /> revolutionizing the Commuting sector
          </p>
        </div>
        {/* <p className="text-7xl text-error"><FaArrowDown></FaArrowDown></p> */}
        <NavbarHome></NavbarHome>
      </div>
    </div>
  );
};

export default Banner;
