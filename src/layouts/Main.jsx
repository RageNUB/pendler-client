import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    useEffect( () => {
        document.querySelector("html").setAttribute("data-theme", "bumblebee")
    },[])

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;