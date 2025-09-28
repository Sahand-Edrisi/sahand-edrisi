import ReactIcon from "@/public/icons/react.svg";
import NextJsIcon from "@/public/icons/NEXT.JS.png";
import ReduxIcon from "@/public/icons/Redux.png";
import TypescriptIcon from "@/public/icons/Typescript.png";
import JsIcon from "@/public/icons/javascript.svg";
import BootstrapIcon from "@/public/icons/bootstrap.svg";
import TailwindIcon from "@/public/icons/Tailwind.png";
import GitIcon from "@/public/icons/git.svg";
import CssIcon from "@/public/icons/css.svg";
import ScssIcon from "@/public/icons/sass.svg";
import ResponsiveIcon from "@/public/icons/responsive website.png";
import HTMLIcon from "@/public/icons/html.svg";
import { StaticImageData } from "next/image";

export interface ISkillType {
  id: number;
  alt: string;
  src: StaticImageData;
  widthImg?: number;
  heightImg?: number;
}
const ImgWidth = 65;
const ImgHeight = 65;

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
];
