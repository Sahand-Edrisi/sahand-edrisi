export interface ITitleProps {
  title?: string;
}

const Titles = ({ title }: ITitleProps) => {
  return (
    <h1 className="flex text-[1rem] font-mono  justify-center p-1 m-2 border-4 border-green rounded-lg ">
      {title}
    </h1>
  );
};

export default Titles;
