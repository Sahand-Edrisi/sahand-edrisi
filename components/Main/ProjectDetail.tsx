import { IProjectDetail } from "@/utils/types/Types";
import Link from "next/link";
import Image from "next/image";

const ProjectDetail = ({
  href,
  widthImg,
  heightImg,
  src,
  size,
  rounded,
}: IProjectDetail) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={rounded}
    >
      <Image
        width={widthImg && size}
        height={heightImg && size}
        alt=""
        src={src}
        className={rounded}
        priority
      />
    </Link>
  );
};

export default ProjectDetail;
