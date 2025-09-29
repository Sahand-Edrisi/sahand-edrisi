"use client";
import ProjectDetail from "./ProjectDetail";
import { projects } from "@/utils/data/ProjectsData";
import { TitleText } from "../Common/TitleText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Titles from "../Common/Titles";
import SeeWebsiteAndGithub from "./SeeWebsiteAndGithub";
import Github from "@/public/icons/githubWebsite.png";
import Website from "@/public/icons/website-content.png";

const Projects = () => {
  return (
    <>
      <div className="pt-3 pb-3">
        <Titles title={TitleText.titleProjects} />
      </div>
      <div className="grid justify-items-center">
        <div className="mt-5 mb-10 h-[15rem] md:h-[24rem]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            pagination={false}
            autoplay={{
              delay:2000,
              disableOnInteraction : false
              
            }}
            modules={[EffectCoverflow, Pagination,Autoplay]}
            className="mySwiper w-[20rem] h-[16rem] m:w-[23rem] sm:w-[26rem] md:w-[47rem] md:h-[24rem]"
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
                <div className="flex justify-items-center justify-around mt-4">
                  <SeeWebsiteAndGithub soursCode={item.soursCode}  icon={Github} />
                  <SeeWebsiteAndGithub soursCode={item.homePage}  icon={Website} />
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
