"use client";

// import GithubIcon from "@/public/icons/github.png";
// import WebSiteIcon from "@/public/icons/website.png";
import ProjectDetail from "./ProjectDetail";
import { projects } from "@/utils/data/ProjectsData";
import { TitleText } from "../Common/TitleText";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Titles from "../Common/Titles";
import GitHubIcon from "./GitHubIcon";

const Projects = () => {
  return (
    <>
      <div className="pt-3 pb-3">
        <Titles title={TitleText.titleProjects} />
      </div>
      <div className="grid justify-items-center">
        <div className="mt-5 mb-10 h-[16rem]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper w-[18rem] h-[15rem]"
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id} className="">
                <div>
                  <ProjectDetail
                    href={item.homePage}
                    widthImg={item.widthImg}
                    heightImg={item.heightImg}
                    src={item.srcImg}
                  />
                </div>
                <div className="flex justify-items-center justify-center">
                  <GitHubIcon href={item.soursCode}/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Projects;
