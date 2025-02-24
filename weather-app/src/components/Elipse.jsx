export const Elipse = ({ className }) => {
  return (
    <div
      className={`absolute size-[140px] rounded-full border border-solid border-[#FFF] left-[50%] right-[50%] -translate-x-1/2 -translate-y-1/2 rotate ${className}`}
    ></div>
  );
};
