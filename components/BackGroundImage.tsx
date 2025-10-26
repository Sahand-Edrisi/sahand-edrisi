import bgImage from "../public/img/Cover-sahand-edc.jpg";
import Image from "next/image";
import MyPic from "../public/img/my-pic.png";

const BackGroundImage = () => {
  return (
    <>
      <div className="relative w-full">
        <Image
          src={bgImage}
          alt=""
          className="w-full h-auto object-contain border-b-4 border-green"
          priority
          width={550}
          height={550}
        />

        <div
          className="absolute left-14 sm:left-16 md:left-28 lg:left-32 top-21 transform -translate-x-1/2 -translate-y-1/2
                  xs:w-20 xs:h-20
                  xm:w-24 xm:h-24
               sm:w-28 sm:h-28
                  md:w-52 md:h-52
                  lg:w-56 lg:h-56
                  xl:w-70 xl:h-70
                  rounded-full overflow-hidden"
        >
          <Image
            src={MyPic}
            alt="سهند ادریسی"
            className="rounded-full w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default BackGroundImage;
