import { socialMedia } from "@/utils/data/SocialMediaData";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface ISocialMedia {
  id?: number;
  src?: StaticImageData;
  href?: string;
  widthImg?: number;
  heightImg?: number;
  download?: string;
  widthINContact?: number;
  heightINContact?: number;
  contactStyle?: boolean;
}

const SocialMedia = ({
  widthINContact,
  heightINContact,
  contactStyle,
}: ISocialMedia) => {
  return (
    <>
      <div
        className={` flex${
          contactStyle ? " justify-around " : " justify-around pl-28 mt-2 md:pl-52"
        }`}
      >
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.href}
            {...(item.download ? { download: item.download } : {})}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            <Image
              width={widthINContact ? widthINContact : item.widthImg}
              height={heightINContact ? heightINContact : item.heightImg}
              alt=""
              src={item.src}
              className="object-cover m:w-[1.7rem] m:h-[1.7rem] sm:w-[2.4rem] sm:h-[2.4rem] md:w-[3.5rem] md:h-[3.5rem]"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
