import Navbar from "../../components/Navbar/Navbar";
import illustration from "../../assets/undraw_order_ride_re_372k.svg";
import illustration2 from "../../assets/undraw_team_spirit_re_yl1v.svg";
import OurTeam from "../Home/OurTeam/OurTeam";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Pendler | Our Story</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="text-center mt-10 space-y-5">
        <h1 className="text-4xl font-bold uppercase">
          Revolutionizing Ride-Sharing
        </h1>
        <p className="text-lg">
          Our mission is to provide a socially responsible and cost-effective
          ride-sharing platform <br />
          that prioritizes customer satisfaction and empowers drivers to grow
          their business.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center max-w-6xl mx-auto lg:h-screen py-7 px-4 lg:p-0 gap-6">
          <div className="col-span-3">
            <h1 className="text-5xl font-bold mb-3">
              Why Pendler is different?
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-[#666d7c] font-normal">
              Our startup offers drivers a reliable and affordable way to share
              rides with passengers through a subscription-based ride-sharing
              platform. Our platform is built to run on a subscription model
              rather than charging a commission, so drivers keep every penny of
              the ride-sharing money they make.
            </p>
          </div>
          <div className="col-span-2">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:h-screen py-7 px-4 lg:p-0 gap-6 max-w-6xl mx-auto">
          <div className="col-span-2 order-2 lg:order-1">
            <LazyLoad>
              <img className="w-[39rem]" src={illustration2} alt="" />
            </LazyLoad>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <h1 className="text-5xl font-bold mb-3 text-white">
              Future of the Pendler
            </h1>
            <hr className="h-2.5 w-36 bg-primary mb-12" />
            <p className="text-2xl break-words mb-5 text-base-300 font-normal">
              Our ride-sharing business has a promising future filled with
              possibilities. We want to reach out to new markets and
              geographical areas. In order to meet changing needs, we will
              create new features and services. Our top priorities are keeping
              customers happy and building a strong driver community. We are
              devoted to improving our platform to its highest potential. We
              anticipate further expansion and achievement in the years to come.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl font-bold text-center">Our Story</h1>
          <hr className="h-2.5 w-36 bg-primary mb-12" />
        </div>
        <h3 className="text-3xl font-bold mt-10">
          How Pendler&apos;s Journey Took Its Shape
        </h3>
        <div className="space-y-5 text-lg mt-8">
          <p>
            In a world where commuting had become a daily struggle, our
            founders, came together with a shared vision to revolutionize the
            ride-sharing industry. Frustrated by the challenges faced by both
            riders and drivers, they embarked on a journey to create a platform
            that would address these pain points and redefine the way people
            commute.{" "}
          </p>
          <p>
            Driven by their passion for innovation and their desire to make a
            meaningful impact, Our founders combined their expertise in
            technology and business to lay the foundation of PENDLER. They
            believed that by leveraging technology and fostering a
            driver-centric approach, they could create a platform that not only
            provided convenience to riders but also empowered drivers to thrive.{" "}
          </p>
          <p>
            Their journey began with countless hours of brainstorming,
            conducting market research, and engaging with drivers and riders to
            understand their needs. They assembled a diverse team of like-minded
            individuals who shared their vision and were equally passionate
            about making a difference.{" "}
          </p>
          <p>
            Together, they meticulously crafted a zero commission model that
            ensured drivers received fair earnings, while riders enjoyed
            affordable and reliable rides. They introduced a subscription system
            that provided drivers with a dedicated subscriber base, ensuring a
            steady flow of customers and a sense of ownership over their
            business.{" "}
          </p>
          <p>
            Throughout their journey, our founders faced numerous challenges,
            but their unwavering determination and belief in their mission kept
            them going. They pushed the boundaries of innovation, embraced
            feedback from their growing community of drivers and riders, and
            constantly iterated to improve the platform.{" "}
          </p>
          <p>
            Today, PENDLER stands as a testament to their dedication and
            relentless pursuit of a better ride-sharing experience. It is a
            platform built on the foundation of driver empowerment, customer
            satisfaction, and social responsibility.{" "}
          </p>
          <p>
            As founders of PENDLER we are committed to driving positive change
            in the transportation industry. They continue to lead the PENDLER
            team, inspiring innovation, fostering a culture of collaboration,
            and ensuring that the platform remains true to its mission of
            transforming the way we commute.{" "}
          </p>
        </div>
        <OurTeam title={false}></OurTeam>
      </div>
    </div>
  );
};

export default OurStory;
