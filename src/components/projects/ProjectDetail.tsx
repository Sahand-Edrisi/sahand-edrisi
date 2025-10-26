import Image, { StaticImageData } from "next/image";

export interface IProjectDetail {
  href: string;
  src: StaticImageData;
  heightImg: number;
  widthImg: number;
}

const ProjectDetail = ({ widthImg, heightImg, src }: IProjectDetail) => {
  return (
    <Image
      width={widthImg}
      height={heightImg}
      alt=""
      src={src}
      className="object-cover rounded-3xl w-[9em] h-[10rem] md:h-[20rem] md:w-[20rem]"
    />
  );
};

export default ProjectDetail;
