

export interface IProjectDetail {
  href: string;
  src: string;
  heightImg: number;
  widthImg: number;
}

const ProjectDetail = ({ src }: IProjectDetail) => {
  return (
    <img
      alt=""
      src={src}
      className="object-cover rounded-3xl w-[9em] h-[10rem] md:h-[20rem] md:w-[20rem]"
    />
  );
};

export default ProjectDetail;
