import { IProjectType } from "../types/Types";

import movieWebPic from "@/public/projectsImg/sample-movie-web-site.png";
import sudokuPic from "@/public/projectsImg/sudoku-table.png";
import ticTacToePic from "@/public/projectsImg/tic-tac-toe.png";
import calculatorPic from "@/public/projectsImg/sample-calculator.png";
import myBlogsPic from "@/public/projectsImg/sample-myBlogs-web-site.png";
import personalWbPic from "@/public/projectsImg/sample-personal-web-site.png";

const ImgWidth = 50;
const ImgHeight = 50;
const IconSize = 50;

export const projects: IProjectType[] = [
  {
    id: 1,
    srcImg: movieWebPic,
    soursCode: "https://github.com/Sahand-Edrisi/movie-website",
    homePage: "https://sahand-edrisi.github.io/movie-website/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    sizIcon: IconSize,
    rounded: " rounded-3xl object-cover w-[19rem] h-[10rem]",
  },
  {
    id: 2,
    srcImg: sudokuPic,
    soursCode: "https://github.com/Sahand-Edrisi/sudoku-table",
    homePage: "https://sahand-edrisi.github.io/sudoku-table/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    sizIcon: IconSize,
    rounded: " rounded-3xl object-cover w-[19rem] h-[10rem]",
  },
  {
    id: 3,
    srcImg: ticTacToePic,
    soursCode: "https://github.com/Sahand-Edrisi/Tic-Tac-Toe",
    homePage: "https://sahand-edrisi.github.io/Tic-Tac-Toe/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    sizIcon: IconSize,
    rounded: " rounded-3xl object-cover w-[19rem] h-[10rem]",
  },
  {
    id: 4,
    srcImg: calculatorPic,
    soursCode: "https://github.com/Sahand-Edrisi/calculator",
    homePage: "https://sahand-edrisi.github.io/calculator/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    sizIcon: IconSize,
    rounded: " rounded-3xl object-cover w-[19rem] h-[10rem]",
  },
  {
    id: 5,
    srcImg: myBlogsPic,
    soursCode: "https://github.com/Sahand-Edrisi/myblogs-web-site",
    homePage: "https://sahand-edrisi.github.io/myblogs-web-site/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    sizIcon: IconSize,
    rounded: " rounded-3xl object-cover w-[19rem] h-[10rem]",
  },
  {
    id: 6,
    srcImg: personalWbPic,
    soursCode: "https://github.com/Sahand-Edrisi/personal-web-site",
    homePage: "https://sahand-edrisi.github.io/personal-web-site/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
    sizIcon: IconSize,
    rounded: " rounded-3xl object-cover w-[19rem] h-[10rem]",
  },
];
