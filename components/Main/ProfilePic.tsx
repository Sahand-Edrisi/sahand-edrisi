import Image from "next/image";
import MyPic from "@/public/img/my-pic.png";
// import MyNamePic from "@/public/img/my-name-pic.jpg";
const ProfilePic = () => {
  return (
    <div className="grid justify-items-center">
      <Image width={300} height={300} alt="" src={MyPic} className="rounded-full"></Image>
      {/* <Image
        width={300}
        height={300}
        alt=""
        src={MyNamePic}
        className=" absolute opacity-45 z-0 rounded-full top-20"
      /> */}
    </div>
  );
};

export default ProfilePic;
