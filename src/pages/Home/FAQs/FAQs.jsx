import { AttentionSeeker, Slide } from "react-awesome-reveal";

const FAQs = () => {
  return (
    <div className="bg-slate-900 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center lg:items-center lg:h-screen py-7 px-4 lg:p-0 max-w-6xl mx-auto">
        <div>
          <Slide direction="left">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Solving the Problems of <br /> Traditional Ridesharing
            </h1>
          </Slide>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
          <AttentionSeeker effect="pulse">
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Discover the common challenges faced by other platforms and how
              Pendler addresses them to provide a superior service.
            </p>
          </AttentionSeeker>
        </div>
        <div className="space-y-2 h-1/2 lg:h-3/4 overflow-y-scroll no-scrollbar">
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              1. How does PENDLER work?
            </div>
            <div className="collapse-content">
              <p>
                PENDLER is a ride-sharing platform that connects customers with
                reliable drivers. Customers can book rides through our
                user-friendly app, and drivers can accept and complete those
                rides, ensuring a seamless experience for all.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              2. What makes PENDLER different from other ride-sharing platforms?
            </div>
            <div className="collapse-content">
              <p>
                At PENDLER, we prioritize both customers and drivers. We offer a
                low commission model, ensuring drivers earn more while customers
                enjoy affordable rides. Our subscription system provides drivers
                with a steady flow of customers, enhancing their earning
                potential and Work satisfaction.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              3. How can I become a driver on PENDLER?
            </div>
            <div className="collapse-content">
              <p>
                To become a driver on PENDLER, simply sign up on our website and
                complete the registration process. Our team will review your
                application, and once approved, you can start accepting ride
                requests and earning money.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              4. What are the benefits of being a PENDLER driver?
            </div>
            <div className="collapse-content">
              <p>
                As a PENDLER driver, you&apos;ll enjoy numerous benefits,
                including higher earnings, a flexible schedule, access to our
                exclusive driver perks and rewards, and a supportive community
                of fellow drivers. We value your success and aim to provide you
                with the best experience in the ride-sharing industry.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              5. How does the subscription system for drivers work?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
                placeat inventore officiis explicabo non nostrum facere aperiam,
                vitae eius.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              6. What are the benefits of Pendler&apos;s subscription system for
              drivers?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
                placeat inventore officiis explicabo non nostrum facere aperiam,
                vitae eius.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              7. How does the referral program work?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
                placeat inventore officiis explicabo non nostrum facere aperiam,
                vitae eius.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              8. Can I use Pendler for both personal and carpooling rides?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
                placeat inventore officiis explicabo non nostrum facere aperiam,
                vitae eius.
              </p>
            </div>
          </div>
          </Slide>
          <Slide direction="right">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              9. How can I book a ride on Pendler?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
                placeat inventore officiis explicabo non nostrum facere aperiam,
                vitae eius.
              </p>
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
