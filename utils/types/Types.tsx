import type { StaticImageData } from "next/image";

export interface ISkillType {
  id: number;
  title: string;
  src: StaticImageData;
}
export interface IProjectType {
  id: number;
  srcImg: StaticImageData;
  soursCode: string;
  homePage: string;
  // sizeImg: number;
  widthImg?: number;
  heightImg?: number;
  sizIcon?: number;
  rounded: string;
}
export interface IProjectDetail {
  href: string;
  src: StaticImageData;
  rounded: string;
  widthImg?: number;
  size?: number;
  heightImg?: number;
}
