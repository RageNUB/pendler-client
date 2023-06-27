import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import EarlyBird from "../pages/EarlyBird/EarlyBird";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "earlyBird",
                element: <EarlyBird></EarlyBird>
            }
        ]
    }
]);

export default router;
