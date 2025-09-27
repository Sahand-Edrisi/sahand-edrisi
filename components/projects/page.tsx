"use client";

import { ProjectText } from "@/utils/Text";
import { projects } from "@/utils/data/projectsData";
import GithubIcon from "@/public/icons/github.png";
import WebSiteIcon from "@/public/icons/website.png";
import ProjectDetail from "../projectsComponents/ProjectDetail";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper/modules";

// import React from "react";

const roundedIcons: string =
  "border-[.1rem] border-green rounded-full w-[2.5rem]";

const Projects = () => {
  return (
    <div className="grid justify-items-center">
      <span className="text-[1.5rem] mt-8 border-b-[.5rem] border-green pr-5 pl-5">
        {ProjectText.title}
      </span>
      <div className="mt-5 mb-10 ">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          modules={[FreeMode, Autoplay]}
          loop={true}
          direction="vertical"
          className="mySwiper w-[19rem] h-[35rem]"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div
                key={item.id}
                className="p-1 rounded-[2rem] border-[.3rem] border-green "
              >
                <ProjectDetail
                  href={item.homePage}
                  widthImg={item.widthImg}
                  heightImg={item.heightImg}
                  src={item.srcImg}
                  rounded={item.rounded}
                />
              </div>
              <div className="flex justify-around mt-3">
                <ProjectDetail
                  href={item.soursCode}
                  size={item.sizIcon}
                  src={GithubIcon}
                  rounded={roundedIcons}
                />
                <ProjectDetail
                  href={item.homePage}
                  size={item.sizIcon}
                  src={WebSiteIcon}
                  rounded={roundedIcons}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
