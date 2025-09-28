import Linkedin from "@/public/icons/linkedin.png";
import Github from "@/public/icons/github.png";
import CVIcon from "@/public/icons/Cv (1).png";
import { StaticImageData } from "next/image";

export interface ISocialMedia {
  id?: number;
  src: StaticImageData;
  href: string;
  widthImg?: number;
  heightImg?: number;
  download?: string;
}

const ImgWidth = 35;
const ImgHeight = 35;

export const socialMedia: ISocialMedia[] = [
  {
    id: 1,
    src: Linkedin,
    href: "https://www.linkedin.com/in/sahand-edrisi/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 2,
    src: Github,
    href: "https://github.com/Sahand-Edrisi",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
];

export const CV : ISocialMedia = {
    src: CVIcon,
    href: "/CV/Sahand_Edrisi.pdf",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    download: "Sahand_Edrisi.pdf",

}
