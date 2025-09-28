import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface IProjectDetail {
  href: string;
  src: StaticImageData;
  heightImg: number;
  widthImg :number
}

const ProjectDetail = ({
  href,
  widthImg,
  heightImg,
  src,
}: IProjectDetail) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <Image
        width={widthImg }
        height={heightImg}
        alt=""
        src={src}
        className="object-cover rounded-3xl w-[17rem] h-[12rem]"
      />
    </Link>
  );
};

export default ProjectDetail;
