export interface IExperienceProjectProps {
  id: number;
  projectName: string;
  projectExplain: string;
}
export interface IExperienceItemProps {
  id :number
  title: string;
  date: string;
  projects: IExperienceProjectProps[];
}
export type IExperienceProps =IExperienceItemProps[]


export const experience: IExperienceProps = [
  {
    id: 1,
    title: "Front-End Developer, Tehran — Remote Programmer",
    date: "Feb 2025 – Sep 2025",
    projects: [
      {
        id: 1,
        projectName: "Rotikala Website",
        projectExplain:
          "Team-Based Project Development with a User Experience Inspired by Digikala",
      },
    ],
  },
  {
    id: 2,
    title: "Zavie, Tehran — Freelance Programmer",
    date: "May 2024 – Feb 2025",
    projects: [
      {
        id: 1,
        projectName: "Movie Showcase Website",
        projectExplain:
          "Developed using React framework for building a fully responsive movie showcase platform.",
      },
    ],
  },
  {
    id: 3,
    title: "Innovation Center, Zanjan — Freelance Programmer",
    date: "May 2023– May 2024",
    projects: [
      {
        id: 1,
        projectName: "Personal Website",
        projectExplain:
          "Developed using HTML, SCSS, and JavaScript to create a responsive personal portfolio website.",
      },
      {
        id: 2,
        projectName: "My Blog",
        projectExplain:
          "Built a responsive blog site using HTML, CSS, and JavaScript for showcasing content and posts.",
      },
      {
        id: 3,
        projectName: "Sudoku Table",
        projectExplain:
          "Built an interactive Sudoku table using HTML and CSS for layout and visual styling.",
      },
    ],
  },
];
