import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/undraw_city_driver_re_9xyv.svg";
import illustration2 from "../../assets/undraw_access_account_re_8spm.svg";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Drivers = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div>
      <Helmet>
        <title>Pendler | Drivers</title>
      </Helmet>
      <Navbar></Navbar>
      <div>
        <div className="bg-slate-900">
          <h1 className="text-4xl font-bold text-center pt-2 text-white">
            Apply For Drive
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
            <div>
              <img src={illustration2} alt="" />
            </div>
            <div>
              (
              <form className="max-w-xl mx-auto px-5">
                <div className=" mt-2 mb-3">
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
                      placeholder="Full Name"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">Email</p>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
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
                  <p className="text-lg font-medium text-primary text-center mt-3">
                    Vehicle Details
                  </p>
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">
                        Car Model
                      </p>
                    </label>
                    <input
                      type="text"
                      name="model"
                      placeholder="Car Model"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>
                  <div>
                    <label>
                      <p className="text-md font-semibold text-white">
                        Plate Number
                      </p>
                    </label>
                    <input
                      type="text"
                      name="plateNumber"
                      placeholder="Plate Number"
                      className="input input-bordered input-primary w-full"
                    />
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
              )
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center lg:h-screen py-7 px-4 lg:p-0">
      <h1 className="text-5xl font-bold text-center mt-14 mb-10">
        Drive with Purpose, Earn with Pride.
      </h1>
        <h3 className="text-4xl font-bold text-center mb-8">0% commission</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-6xl mx-auto  gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">
              Empowering Drivers with our Innovative Subscription System
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Our platform is built to run on a subscription model rather than
              charging a commission from drivers, so drivers keep every penny of
              the ride-sharing money they make.
            </p>
          </div>
          <div>
            <img className="w-[39rem]" src={illustration} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto lg:-mt-8 px-4 mt-5">
        <h3 className="text-4xl font-bold text-center mb-8">
          Unlocking Opportunities for Drivers{" "}
        </h3>
        <div className="space-y-4 text-2xl mb-32 text-[#424754]">
          <p>
            Our platform offers drivers numerous benefits, including higher
            earnings through our <b>NO commission model</b>, with our{" "}
            <b>driver-centric approach</b>, we aim to <b>empower drivers</b> by
            providing them with a supportive ecosystem that enables growth,{" "}
            <b>financial stability</b>, and enhanced Work satisfaction. By
            joining our platform, drivers can experience improved livelihoods,
            increased flexibility, and a rewarding partnership that prioritizes
            Driver&apos;s success.{" "}
          </p>
          <p>
            <span className="font-bold">Zero Commission Model: </span>We offer
            drivers a ZERO commission structure, allowing them to keep a larger
            portion of their earnings and maximize their income.
          </p>
          <p>
            <span className="font-bold">Subscription System : </span>Our
            subscription model empowers drivers with full control over their
            earnings. Say goodbye to unpredictable income and hello to stability
            and ownership. Customers pay less, while drivers earn what they
            deserve. Join us and be the master of your ride-sharing success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
