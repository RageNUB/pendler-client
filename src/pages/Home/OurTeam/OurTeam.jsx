const OurTeam = ({title}) => {
  return (
    <div className="mt-6 mb-10">
      {title && <h1 className="text-5xl font-bold mb-3 text-center">
        Passionate Minds Driving Innovation
      </h1>}
      <div className="flex flex-col gap-10 mt-14">
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          <div data-aos="fade-right" className="flex flex-col items-center">
            <img
              className="rounded-full w-72 h-60 shadow-xl hover:shadow-2xl"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
              alt=""
            />
            <h2 className="text-xl font-bold mt-3">Vishnu Vardhan</h2>
            <p>Co-Founder & CEO</p>
          </div>
          <div data-aos="fade-right" className="flex flex-col items-center">
            <img
              className="rounded-full w-72 h-60 shadow-xl hover:shadow-2xl"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
              alt=""
            />
            <h2 className="text-xl font-bold mt-3">Likhith Ram</h2>
            <p>Co-Founder & COO</p>
          </div>
          <div data-aos="fade-right" className="flex flex-col items-center">
            <img
              className="rounded-full w-72 h-60 shadow-xl hover:shadow-2xl"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
              alt=""
            />
            <h2 className="text-xl font-bold mt-3">Prathima Kadari</h2>
            <p>Co-Founder & CTO</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          <div data-aos="fade-right" className="flex flex-col items-center">
            <img
              className="rounded-full w-72 h-60 shadow-xl hover:shadow-2xl"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
              alt=""
            />
            <h2 className="text-xl font-bold mt-3">Sampath Raghavan</h2>
            <p>Co-Founder</p>
          </div>
          <div data-aos="fade-right" className="flex flex-col items-center">
            <img
              className="rounded-full w-72 h-60 shadow-xl hover:shadow-2xl"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
              alt=""
            />
            <h2 className="text-xl font-bold mt-3">Vaibhav</h2>
            <p>Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
