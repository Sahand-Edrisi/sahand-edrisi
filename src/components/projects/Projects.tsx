"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ProjectDetail from "./ProjectDetail";
import SeeWebsiteAndGithub from "./SeeWebsiteAndGithub";
import Titles from "../Common/Titles";
import { TitleText } from "../Common/TitleText";
import { projects } from "../../utils/data/ProjectsData";

// آیکون‌ها از public استفاده می‌شوند
const GithubIcon = "/icons/github.png";
const WebsiteIcon = "/icons/website-content.png";

const Projects = () => {
  return (
    <section className="pt-3 pb-3">
      {/* عنوان بخش */}
      <Titles title={TitleText.titleProjects} />

      <div className="grid justify-items-center mt-5 mb-1 h-[15rem] md:h-[24rem] w-full">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          pagination={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            425: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-[18rem] h-[16rem] xm:w-[21rem] sm:w-[26rem] md:w-[48rem] md:h-[24rem] lg:w-[60rem] lg:h-[26rem] xl:w-[90rem] xl:h-[26rem]"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              {/* تصویر پروژه */}
              <div className="flex justify-center">
                <ProjectDetail
                  href={item.homePage}
                  widthImg={item.widthImg}
                  heightImg={item.heightImg}
                  src={item.srcImg}
                />
              </div>

              {/* لینک‌ها: گیت‌هاب و وبسایت */}
              <div className="flex justify-around mt-4">
                <SeeWebsiteAndGithub soursCode={item.soursCode} icon={GithubIcon} />
                <SeeWebsiteAndGithub soursCode={item.homePage} icon={WebsiteIcon} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
