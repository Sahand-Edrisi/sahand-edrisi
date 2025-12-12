export interface IAbout {
  name: string;
  titleWork: string;
  titleSkills: string;
  titleLocation: string;
  src: string;
  university: string;
  widthImage: number;
  heightImg: number;
}

const widthImage = 15;
const heightImg = 15;

export const AboutMeData: IAbout = {
  name: "Sahand Edrisi",
  titleWork: "Front-End Developer",
  titleSkills: "React.js , Next.js , TypeScript , JavaScript",
  titleLocation: "Tehran, Tehran Province, Iran",
  src: "/icons/university.png",
  university: "Bachelor's Degree in Industrial Engineering",
  widthImage: widthImage,
  heightImg: heightImg,
};
