export interface IProjectType {
  id: number;
  srcImg: string;
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
    srcImg: "/projectsImg/sample-movie-web-site.png",
    soursCode: "https://github.com/Sahand-Edrisi/movie-website",
    homePage: "https://sahand-edrisi.github.io/movie-website/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 2,
    srcImg: "/projectsImg/sudoku-table.png",
    soursCode: "https://github.com/Sahand-Edrisi/sudoku-table",
    homePage: "https://sahand-edrisi.github.io/sudoku-table/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 3,
    srcImg: "/projectsImg/tic-tac-toe.png",
    soursCode: "https://github.com/Sahand-Edrisi/Tic-Tac-Toe",
    homePage: "https://sahand-edrisi.github.io/Tic-Tac-Toe/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 4,
    srcImg: "/projectsImg/sample-calculator.png",
    soursCode: "https://github.com/Sahand-Edrisi/calculator",
    homePage: "https://sahand-edrisi.github.io/calculator/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 5,
    srcImg: "/projectsImg/sample-myBlogs-web-site.png",
    soursCode: "https://github.com/Sahand-Edrisi/myblogs-web-site",
    homePage: "https://sahand-edrisi.github.io/myblogs-web-site/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
  {
    id: 6,
    srcImg: "/projectsImg/sample-personal-web-site.png",
    soursCode: "https://github.com/Sahand-Edrisi/personal-web-site",
    homePage: "https://sahand-edrisi.github.io/personal-web-site/",
    widthImg: ImgWidth,
    heightImg: ImgHeight,
  },
];
