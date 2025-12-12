import { socialMedia } from "../../utils/data/SocialMediaData";
import { ContactMeData } from "../../utils/data/ContactMeData";

export interface ISocialMedia {
  id?: number;
  src?: string;
  href?: string;
  widthImg?: number;
  heightImg?: number;
  download?: string;
  widthINContact?: number;
  heightINContact?: number;
  contactStyle?: boolean;
  contactMe?: boolean;
}

const SocialMedia = ({ contactStyle, contactMe }: ISocialMedia) => {
  return (
    <>
      <div
        className={` flex${
          contactStyle
            ? " justify-around "
            : " justify-around pl-28 mt-2 md:pl-52"
        }`}
      >
        {contactMe &&
          ContactMeData.map((item) => (
            <a href={item.href} key={item.id}>
              <img
                alt={item.alt || item.text}
                src={item.icon}
                className="object-cover xs:w-[1.2rem] xs:h-[1.2rem] xm:w-[1.7rem] xm:h-[1.7rem] sm:w-[2.4rem] sm:h-[2.4rem] md:w-[3.5rem] md:h-[3.5rem]"
              />
            </a>
          ))}

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
            <img
              alt=""
              src={item.src}
              className="object-cover xs:w-[1.2rem] xs:h-[1.2rem] xm:w-[1.7rem] xm:h-[1.7rem] sm:w-[2.4rem] sm:h-[2.4rem] md:w-[3.5rem] md:h-[3.5rem]"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
