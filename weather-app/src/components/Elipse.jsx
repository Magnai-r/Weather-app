export const Elipse = ({ className }) => {
  return (
    <div
      className={`absolute size-[140px] rounded-full border border-solid border-t-black border-l-black border-r-white border-b-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-10 ${className}`}
    ></div>
  );
};
