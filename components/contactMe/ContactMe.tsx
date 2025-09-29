import { ContactMeData } from "@/utils/data/ContactMeData";
import { TitleText } from "../Common/TitleText";
import Titles from "../Common/Titles";
import Image from "next/image";
import SocialMedia from "../socialMedia/SocialMedia";

const ContactMe = () => {
  return (
    <>
      <Titles title={TitleText.titleContactMe} />
      <div className="flex justify-around">
        {ContactMeData.map((item) => (
          <a
            href={item.href}
            key={item.id}
            // target={item.href.startsWith("http") ? "_blank" : "_self"}
            // rel={
            //   item.href.startsWith("http") ? "noopener noreferrer" : undefined
            // }
          >
            <Image
              width={item.width}
              height={item.height}
              alt={item.alt}
              src={item.icon}
              className="md:w-[3.5rem] md:h-[3.5rem]"
            />
          </a>
        ))}
      </div>
      <div className="pt-5">
      <SocialMedia widthINContact={35} heightINContact={35} contactStyle={true}/>
      </div>
    </>
  );
};

export default ContactMe;
