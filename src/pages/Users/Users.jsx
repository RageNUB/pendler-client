import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/undraw_order_ride_re_372k.svg";
import illustration2 from "../../assets/undraw_subway_-7-vh7.svg";

const Users = () => {
  return (
    <div>
      <Navbar></Navbar>
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
      <div className="bg-slate-900 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto gap-6">
          <div className="col-span-2">
            <img className="w-[39rem]" src={illustration2} alt="" />
          </div>
          <div className="col-span-3">
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
              With Pendler&apos;s referral program, everyone wins! As a driver or
              user, when you refer someone to join Pendler, you both enjoy the
              benefits. For every ride that your referral takes, you receive a
              percentage of the fare as a reward. This means that the more
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
