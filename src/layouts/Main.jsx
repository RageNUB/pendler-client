import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Scroll from "../components/Scroll/Scroll";

const Main = () => {
    useEffect( () => {
        document.querySelector("html").setAttribute("data-theme", "bumblebee")
    },[])

    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Scroll></Scroll>
        </div>
    );
};

export default Main;