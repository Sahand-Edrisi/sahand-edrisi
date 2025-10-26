import ReactIcon from "../../../public/icons/react.svg";
import NextJsIcon from "../../../public/icons/NEXT.JS.png";
import ReduxIcon from "../../../public/icons/Redux.png";
import TypescriptIcon from "../../../public/icons/Typescript.png";
import JsIcon from "../../../public/icons/java-script.png";
import BootstrapIcon from "../../../public/icons/bootstrap.svg";
import TailwindIcon from "../../../public/icons/Tailwind.png";
import GitIcon from "../../../public/icons/git.svg";
import CssIcon from "../../../public/icons/css.svg";
import ScssIcon from "../../../public/icons/sass.svg";
import ResponsiveIcon from "../../../public/icons/responsive website.png";
import HTMLIcon from "../../../public/icons/html.png";
import FlowbiteIcon from "../../../public/icons/Flowbite.svg";
import RestApiIcon from "../../../public/icons/api.png";
import SwiperIcon from "../../../public/icons/swiper.svg";

export interface ISkillType {
  id: number;
  alt: string;
  src: string;
}

export const icons: ISkillType[] = [
  {
    id: 1,
    alt: "React",
    src: ReactIcon,
  },
  {
    id: 2,
    alt: "Next.js",
    src: NextJsIcon,
  },
  {
    id: 3,
    alt: "Redux",
    src: ReduxIcon,
  },
  {
    id: 4,
    alt: "TypeScript",
    src: TypescriptIcon,
  },
  {
    id: 5,
    alt: "JavaScript",
    src: JsIcon,
  },
  {
    id: 6,
    alt: "Bootstrap",
    src: BootstrapIcon,
  },
  {
    id: 7,
    alt: "Tailwind CSS",
    src: TailwindIcon,
  },
  {
    id: 8,
    alt: "Git",
    src: GitIcon,
  },
  {
    id: 9,
    alt: "CSS",
    src: CssIcon,
  },
  {
    id: 10,
    alt: "SCSS",
    src: ScssIcon,
  },
  {
    id: 11,
    alt: "Responsive Design",
    src: ResponsiveIcon,
  },
  {
    id: 12,
    alt: "HTML",
    src: HTMLIcon,
  },
  {
    id: 13,
    alt: "Swiper",
    src: SwiperIcon,
  },
  {
    id: 14,
    alt: "Flowbite",
    src: FlowbiteIcon,
  },
  {
    id: 15,
    alt: "REST_Api",
    src: RestApiIcon,
  },
];
