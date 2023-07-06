import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import EarlyBird from "../pages/EarlyBird/EarlyBird";
import OurStory from "../pages/OurStory/OurStory";
import AboutUs from "../pages/AboutUs/AboutUs";
import Drivers from "../pages/Drivers/Drivers";
import Users from "../pages/Users/Users";
import Articles from "../pages/Articles/Articles";
import JoinUs from "../pages/JoinUs/JoinUs";

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
                path: "our-story",
                element: <OurStory></OurStory>
            },
            {
                path: "early-bird",
                element: <EarlyBird></EarlyBird>
            },
            {
                path: "about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "drivers",
                element: <Drivers></Drivers>
            },
            {
                path: "users",
                element: <Users></Users>
            },
            {
                path: "join-us",
                element: <JoinUs></JoinUs>
            },
            {
                path: "articles",
                element: <Articles></Articles>
            }
        ]
    }
]);

export default router;
