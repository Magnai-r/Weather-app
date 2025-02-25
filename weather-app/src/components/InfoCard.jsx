import { GrLocation } from "react-icons/gr";
export const InfoCard = ({ theme, date, city, image, temp, condition }) => {
  return (
    <div
      className={`relative flex flex-col w-[414px] h-[818px] border rounded-[48px] ${
        theme ? "bg-[#ffffff]" : "bg-[#000]"
      }`}
    >
      <div className="absolute w-full flex pl-10 pt-[56px] gap-[112px]">
        <div className="flex flex-col">
          <p className="text-[#6B7280] leading-normal text-lg  font-medium">
            {date}
          </p>
          <h1 className="text-[#111827] text-5xl leading-normal font-extrabold">
            {city}
          </h1>
        </div>
        <GrLocation className="w-8 h-8" />
      </div>
      <img src={image} alt="" />
    </div>
  );
};
