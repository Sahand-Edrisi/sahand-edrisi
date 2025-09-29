import bgImage from "@/public/img/sahand-edc-3.jpg";
import Image from "next/image";
import MyPic from "@/public/img/my-pic.png";

const BackGroundImage = () => {
  return (
    <>
      <div className="w-full relative">
        <div>
          <Image
            width={550}
            height={550}
            alt=""
            src={bgImage}
            className="z-0 w-full h-[8rem] sm:h-[10rem] md:h-[15rem] lg:h-[18rem] object-cover border-b-4 border-green"
            priority
          />
        </div>

        <div className=" grid justify-items-center pt-5 absolute left-2 top-[3.2rem] sm:top-[5.4rem] md:top-[8rem] md:left-6">
          <Image
            width={100}
            height={100}
            alt=""
            src={MyPic}
            className="rounded-full md:w-[12rem] md:h-[12rem]"
            priority
          ></Image>
        </div>
      </div>
    </>
  );
};

export default BackGroundImage;
