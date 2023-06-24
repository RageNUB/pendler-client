import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
    useEffect( () => {
        document.querySelector("html").setAttribute("data-theme", "bumblebee")
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;