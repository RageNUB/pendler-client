import Navbar from "../../components/Navbar/Navbar";
import illustration2 from "../../assets/undraw_access_account_re_8spm.svg";

const JoinUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-4xl font-bold uppercase">Careers</h1>
        <p className="text-lg">
          We are a tight-knit team of innovators on a mission to radically
          transform the ride-sharing sector.
        </p>
      </div>
      <div className="mt-14 bg-slate-900">
        <h1 className="text-4xl font-bold text-center pt-5 text-white">
          Join Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center max-w-6xl mx-auto mt-3 py-8">
          <div>
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
                    placeholder="Your Name"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div>
                  <label>
                    <p className="text-md font-semibold text-white">Email Address</p>
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
                  <textarea className="textarea textarea-secondary textarea-lg w-full max-w-lg" placeholder="Your Message"></textarea>

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
            <img src={illustration2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;