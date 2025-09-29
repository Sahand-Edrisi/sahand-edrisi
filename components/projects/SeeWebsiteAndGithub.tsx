import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";


export interface IProp {
  soursCode: string;
  icon: StaticImageData;
}

const SeeWebsiteAndGithub = ({ soursCode, icon }: IProp) => {
  return (
    <>
      <Link
        href={soursCode}
        target="_blank"
        rel="noopener noreferrer"
        className="z-30"
      >
        <Image
          width={38}
          height={38}
          alt=""
          src={icon}
          className="object-cover   "
        />
      </Link>
    </>
  );
};

export default SeeWebsiteAndGithub;
