import { Elipse } from "@/components";

export default function Home() {
  return (
    <div className="flex  w-[1600px] h-screen relative">
      <div className=" flex justify-center items-center">
        <Elipse></Elipse>
      </div>
      <div className="flex w-[800px] bg-[#F3F4F6]">day</div>
      <div className="flex w-[800px] bg-[#0F141E]">night</div>
    </div>
  );
}
