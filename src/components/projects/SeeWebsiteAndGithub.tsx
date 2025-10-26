export interface IProp {
  soursCode: string;
  icon: string;
}

const SeeWebsiteAndGithub = ({ soursCode, icon }: IProp) => {
  return (
    <>
      <a
        href={soursCode}
        target="_blank"
        rel="noopener noreferrer"
        className="z-30 "
      >
        <img src={icon} className="object-cover w-[2rem] h-[2rem] " />
      </a>
    </>
  );
};

export default SeeWebsiteAndGithub;
