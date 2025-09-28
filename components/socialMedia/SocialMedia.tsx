import { socialMedia } from "@/utils/data/SocialMediaData";
import { CV } from "@/utils/data/SocialMediaData";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <>
      <div className="flex pr-2 justify-end">
        <a href={CV.href} download={CV.download}>
          <Image
            width={CV.widthImg}
            height={CV.heightImg}
            alt=""
            src={CV.src}
            className="object-cover m-2"
          />
        </a>
        {socialMedia.map((item) => (
          <Link key={item.id} href={item.href}>
            <Image
              width={item.widthImg}
              height={item.heightImg}
              alt=""
              src={item.src}
              className="object-cover m-2"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
