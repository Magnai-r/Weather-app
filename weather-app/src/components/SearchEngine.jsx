import { Input } from "postcss";
import { CiSearch } from "react-icons/ci";
export const SearchEngine = () => {
  return (
    <div className="flex py-6 items-center gap-4 p-2 w-[567px] min-w-[320px] rounded-[48px] bg-[#FFF]">
      <CiSearch className="fill-black size-12"></CiSearch>
      <input
        className="bg-transparent focus-visible: border-none outline-none text-black"
        type="text"
      />
    </div>
  );
};
