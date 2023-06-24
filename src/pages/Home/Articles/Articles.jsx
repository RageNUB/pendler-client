import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const Articles = () => {
  return (
    <div className="h-screen">
      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-5xl font-bold mb-3">
          Insights and Updates <br /> on Ridesharing
        </h1>
        <hr className="h-2.5 w-36 bg-primary mb-12" />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper max-w-6xl mx-auto"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-center items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">John Smith</h1>
              <h3 className="text-lg font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, tempora!</h3>
              <p className="text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <p className="text-lg mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <div className="mt-5 flex gap-4">
                <button className="btn btn-primary rounded-3xl">Why Pendler ?</button>
                <button className="btn btn-primary rounded-3xl">How Pendler Works</button>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-center items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">John Smith</h1>
              <h3 className="text-lg font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, tempora!</h3>
              <p className="text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <p className="text-lg mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <div className="mt-5 flex gap-4">
                <button className="btn btn-primary rounded-3xl">Why Pendler ?</button>
                <button className="btn btn-primary rounded-3xl">How Pendler Works</button>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-center items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">John Smith</h1>
              <h3 className="text-lg font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, tempora!</h3>
              <p className="text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <p className="text-lg mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <div className="mt-5 flex gap-4">
                <button className="btn btn-primary rounded-3xl">Why Pendler ?</button>
                <button className="btn btn-primary rounded-3xl">How Pendler Works</button>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-center items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">John Smith</h1>
              <h3 className="text-lg font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, tempora!</h3>
              <p className="text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <p className="text-lg mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus amet possimus voluptas vero eius in necessitatibus
                obcaecati quibusdam cupiditate earum nemo aut reprehenderit odit
                dolores nobis numquam repellat, exercitationem deleniti!
              </p>
              <div className="mt-5 flex gap-4">
                <button className="btn btn-primary rounded-3xl">Why Pendler ?</button>
                <button className="btn btn-primary rounded-3xl">How Pendler Works</button>
              </div>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1687602162~exp=1687602762~hmac=cb4b58a1d1c9569c8f4ae7aff7b2229f1095f483c22dfa319c0ce56e2597abfa"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Articles;
