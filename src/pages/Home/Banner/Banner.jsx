import NavbarHome from "../../../components/NavbarHome.jsx/NavbarHome";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-center banner flex flex-col justify-between items-center pt-8 mb-8">
        <div>
        <h1 className="text-7xl font-bold mb-14">Welcome to PENDLER</h1>
          <button className="btn btn-primary rounded-3xl mb-10 px-8">
            Join pendler
          </button>
          <p className="text-3xl font-medium">
            Discover how pendler <br /> is revolutionizing the <br /> Commuting
            sector
          </p>
        </div>
        {/* <p className="text-7xl text-error"><FaArrowDown></FaArrowDown></p> */}
        <NavbarHome></NavbarHome>
      </div>
    </div>
  );
};

export default Banner;
