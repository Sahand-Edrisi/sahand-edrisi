import Image from "next/image";
import Link from "next/link";
import React from "react";
import Github from "@/public/icons/github.png"

const GitHubIcon = ({href}:{href : string}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="">
      <Image
        width={40}
        height={40}
        alt=""
        src={Github}
        className="object-cover rounded-full  "
      />
    </Link>
  );
};

export default GitHubIcon;
