import ReactIcon from "../../src/public/icons/react.svg";
import NextJsIcon from "../../src/public/icons/NEXT.JS.png";
import ReduxIcon from "../../src/public/icons/Redux.png";
import TypescriptIcon from "../../src/public/icons/Typescript.png";
import JsIcon from "../../src/public/icons/java-script.png";
import BootstrapIcon from "../../src/public/icons/bootstrap.svg";
import TailwindIcon from "../../src/public/icons/Tailwind.png";
import GitIcon from "../../src/public/icons/git.svg";
import CssIcon from "../../src/public/icons/css.svg";
import ScssIcon from "../../src/public/icons/sass.svg";
import ResponsiveIcon from "../../src/public/icons/responsive website.png";
import HTMLIcon from "../../src/public/icons/html.png";
import FlowbiteIcon from "../../src/public/icons/Flowbite.svg" 
import RestApiIcon from "../../src/public/icons/api.png" 
import SwiperIcon from "../../src/public/icons/swiper.svg" 

import { StaticImageData } from "next/image";

export interface ISkillType {
  id: number;
  alt: string;
  src: StaticImageData;
  widthImg?: number;
  heightImg?: number;
}
const ImgWidth = 80;
const ImgHeight = 80;

export const icons: ISkillType[] = [
  {
    id: 1,
    alt: "React",
    src: ReactIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 2,
    alt: "Next.js",
    src: NextJsIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 3,
    alt: "Redux",
    src: ReduxIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 4,
    alt: "TypeScript",
    src: TypescriptIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 5,
    alt: "JavaScript",
    src: JsIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 6,
    alt: "Bootstrap",
    src: BootstrapIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 7,
    alt: "Tailwind CSS",
    src: TailwindIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 8,
    alt: "Git",
    src: GitIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 9,
    alt: "CSS",
    src: CssIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 10,
    alt: "SCSS",
    src: ScssIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 11,
    alt: "Responsive Design",
    src: ResponsiveIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 12,
    alt: "HTML",
    src: HTMLIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 13,
    alt: "Swiper",
    src: SwiperIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 14,
    alt: "Flowbite",
    src: FlowbiteIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 15,
    alt: "REST_Api",
    src: RestApiIcon,
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
];
