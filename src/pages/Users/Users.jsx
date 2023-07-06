import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/undraw_referral_re_0aji.svg";
import illustration2 from "../../assets/Taxi Driver_Monochromatic.svg";
import illustration3 from "../../assets/undraw_access_account_re_8spm.svg"
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <div>
      <Helmet>
        <title>Pendler | Users</title>
      </Helmet>
      <Navbar></Navbar>
      <div>
        <div className="bg-slate-900">
          <h1 className="text-4xl font-bold text-center pt-2 text-white">
          Sign Up As Rider (Early Access)
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
            <div>
              <img src={illustration3} alt="" />
            </div>
            <div>
              { (
                <form className="max-w-xl mx-auto px-5">
                  <div className=" mt-2 mb-3 space-y-2">
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
                        <p className="text-md font-semibold text-white">
                          Email
                        </p>
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
                    <div>
                      <label>
                        <p className="text-md font-semibold text-white">City</p>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
          <div className="col-span-3">
            <h1 className="text-4xl font-bold mb-3">
              Fair and Transparent Pricing: <br /> Unlock the Best Value for
              Your Rides
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Our innovative pricing model ensures that drivers earn more while
              riders enjoy competitive fares, creating a win-win situation for
              everyone. By eliminating high commissions and implementing a
              subscription-based approach, we prioritize your savings without
              compromising on the quality of your ride experience.
            </p>
          </div>
          <div className="col-span-2">
            <img className="w-[39rem]" src={illustration} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto gap-6">
          <div className="col-span-2 order-2 lg:order-1">
            <img className="w-[39rem]" src={illustration2} alt="" />
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <h1 className="text-4xl font-bold mb-3 text-white">
              Choose Pendler, Support Drivers: Drive with Purpose and Make a
              Difference
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              By riding with us, you not only save on fares but also contribute
              to the success of our dedicated drivers. Our unique model ensures
              that drivers earn more, creating a win-win situation where you
              enjoy cost-effective transportation while supporting the
              hardworking individuals who make it possible.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
          <div className="col-span-3">
            <h1 className="text-4xl font-bold mb-3">
              Earn Rewards with Pendler&apos;s Referral Program
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              With Pendler&apos;s referral program, everyone wins! As a driver
              or user, when you refer someone to join Pendler, you both enjoy
              the benefits. For every ride that your referral takes, you receive
              a percentage of the fare as a reward. This means that the more
              referrals you make, the more you earn with every ride they take.
              It&apos;s a fantastic opportunity to boost your earnings while
              promoting Pendler to your network. Start referring today and watch
              your rewards grow with every ride!
            </p>
          </div>
          <div className="col-span-2">
            <img className="w-[39rem]" src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
