import "./Banner.css"

const Banner = () => {
    return (
        <div className="text-center banner w-full h-screen flex flex-col justify-center items-center mb-8">
            <h1 className="text-6xl font-semibold mb-10">Welcome to PENDLER</h1>
            <button className="btn btn-primary rounded-3xl mb-6">Join pendler</button>
            <p className="text-2xl font-medium">Discover how pendler is <br /> revolutionizing the Commuting sector</p>
            {/* <p className="text-7xl text-error"><FaArrowDown></FaArrowDown></p> */}
        </div>
    );
};

export default Banner;