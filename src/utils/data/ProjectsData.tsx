import movieWebPic from "../../../public/projectsImg/sample-movie-web-site.png";
import sudokuPic from "../../../public/projectsImg/sudoku-table.png";
import ticTacToePic from "../../../public/projectsImg/tic-tac-toe.png";
import calculatorPic from "../../../public/projectsImg/sample-calculator.png";
import myBlogsPic from "../../../public/projectsImg/sample-myBlogs-web-site.png";
import personalWbPic from "../../../public/projectsImg/sample-personal-web-site.png";
import { StaticImageData } from "next/image";
export interface IProjectType {
  id: number;
  srcImg: StaticImageData;
  soursCode: string;
  homePage: string;
  widthImg: number;
  heightImg: number;
}
const ImgWidth = 350;
const ImgHeight = 350;

export const projects: IProjectType[] = [
  {
    id: 1,
    srcImg: movieWebPic,
    soursCode: "https://github.com/Sahand-Edrisi/movie-website",
    homePage: "https://sahand-edrisi.github.io/movie-website/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 2,
    srcImg: sudokuPic,
    soursCode: "https://github.com/Sahand-Edrisi/sudoku-table",
    homePage: "https://sahand-edrisi.github.io/sudoku-table/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 3,
    srcImg: ticTacToePic,
    soursCode: "https://github.com/Sahand-Edrisi/Tic-Tac-Toe",
    homePage: "https://sahand-edrisi.github.io/Tic-Tac-Toe/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 4,
    srcImg: calculatorPic,
    soursCode: "https://github.com/Sahand-Edrisi/calculator",
    homePage: "https://sahand-edrisi.github.io/calculator/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 5,
    srcImg: myBlogsPic,
    soursCode: "https://github.com/Sahand-Edrisi/myblogs-web-site",
    homePage: "https://sahand-edrisi.github.io/myblogs-web-site/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 6,
    srcImg: personalWbPic,
    soursCode: "https://github.com/Sahand-Edrisi/personal-web-site",
    homePage: "https://sahand-edrisi.github.io/personal-web-site/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
];
