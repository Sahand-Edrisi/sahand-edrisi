const BackGroundImage = () => {
  return (
    <div className="relative w-full">
      <img
        src="/img/Cover-sahand-edc.png"
        alt="sahand-Edrisi-cover-img"
        className="object-contain w-full h-auto border-b-4 border-green-500"
      />

      <div
        className="absolute overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full left-14 sm:left-16 md:left-28 lg:left-32 top-21 xs:w-20 xs:h-20 xm:w-24 xm:h-24 sm:w-28 sm:h-28 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-70 xl:h-70"
      >
        <img
          src="/img/my-pic.png"
          alt="سهند ادریسی"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default BackGroundImage;
