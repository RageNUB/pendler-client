import Navbar from "../../components/Navbar/Navbar";
import illustration2 from "../../assets/undraw_personal_opinions_re_qw29.svg";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center mt-10 space-y-5 max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold uppercase">Contact Our Firm</h1>
        <p className="text-lg">
          We are a tight-knit team of innovators on a mission to radically
          transform the ride-sharing sector. For any discussions or business
          proposals, you can drop us a mail to pendlerofficial1@gmail.com . Any queries / feedback, feel
          free to reach out through this form. We would love to hear from you.
        </p>
      </div>
      <div className="mt-14 bg-slate-900 h-screen grid justify-center items-center">
        <h1 className="text-4xl font-bold text-center pt-5 text-white">
          Drop Your Queries / Inputs
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
          <div>
            <form className="max-w-xl mx-auto px-5">
              <div className="mt-2 mb-3 space-y-2">
                <p className="text-lg font-medium text-primary text-center">
                  Personal Info
                </p>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Full Name
                    </p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Email Address
                    </p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Phone Number
                    </p>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">
                      Your Message
                    </p>
                  </label>
                  <textarea
                    className="textarea textarea-secondary textarea-lg w-full max-w-lg"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <label>
                  <input
                    className="btn btn-primary text-white btn-block mt-4"
                    type="submit"
                    value="Submit"
                  />
                </label>
              </div>
            </form>
          </div>
          <div>
            <LazyLoad>
            <img src={illustration2} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
