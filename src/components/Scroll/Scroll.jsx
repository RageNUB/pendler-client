import { useState } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Scroll = () => {
  const [bottom, setBottom] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  const checkScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 4400 && location.pathname === "/") {
      setBottom(true);
    } else if (window.scrollY >= 2800 && location.pathname === "/our-story") {
      setBottom(true);
    } else if (window.scrollY >= 1700 && location.pathname === "/drivers") {
      setBottom(true);
    } else if (window.scrollY >= 2200 && location.pathname === "/users") {
      setBottom(true);
    } else if (window.scrollY >= 580 && location.pathname === "/join-us") {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };
  window.addEventListener("scroll", checkScroll);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="relative">
      <div className="avatar placeholder">
        {bottom && (
          <div
            onClick={scrollToTop}
            className="bg-primary text-neutral-content rounded-full w-12 fixed bottom-5 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </div>
        )}
        {!bottom && (
          <div
            onClick={scrollToBottom}
            className="bg-primary text-neutral-content rounded-full w-12 fixed right-5 bottom-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scroll;
