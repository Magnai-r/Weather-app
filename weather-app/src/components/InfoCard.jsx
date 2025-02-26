import { GrLocation } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
export const InfoCard = ({
  theme,
  date,
  city,
  image,
  temp,
  condition,
  text,
}) => {
  return (
    <div
      className={`relative flex flex-col w-[414px] h-[818px] border backdrop-blur-md rounded-[48px] ${
        theme ? "bg-[#ffffff]" : "bg-[#000]"
      }`}
    >
      <div className="absolute w-full flex pl-10 pt-[56px] gap-[112px]">
        <div className="flex flex-col">
          <p className="text-[#6B7280] leading-normal text-lg  font-medium">
            {date}
          </p>
          <h1
            className={`text-[#111827] text-5xl leading-normal font-extrabold ${
              text ? "text-[#111827]" : "text-[#F9FAFB]"
            }`}
          >
            {city}
          </h1>
        </div>
        <GrLocation
          className={` w-8 h-8  ${text ? "text-[#000]" : "text-[#F9FAFB]"}`}
        />
      </div>
      <div className="flex w-[414px] h-[818px] pl-[69.96px] pt-[196px]">
        <img
          className=" aspect-[262.11/262.11] w-[262.108px] h-[262.108px]"
          src={image}
          alt="sun&moon"
        />
      </div>
      <div className="absolute pl-12 pt-[478px]">
        <h1
          className={`text-[144px] font-extrabold leading-normal bg-clip-text text-transparent  ${
            text
              ? "bg-gradient-to-b from-black to-transparent  "
              : "bg-gradient-to-b from-slate-100 to-transparent "
          }`}
        >
          {temp}
        </h1>
        <p
          className={`font-extrabold text-2xl leading-normal ${
            text ? "text-[#FF8E27]" : "text-[#777CCE]"
          }`}
        >
          {condition}
        </p>
      </div>
      <div className="flex w-full  pb-10 justify-center">
        <div className="flex justify-between items-end w-[318px]">
          <FiHome className="w-8 h-8" />
          <GrLocation className="w-8 h-8" />
          <FaRegHeart className="w-8 h-8" />
          <FaRegUser className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
