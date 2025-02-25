import { Elipse, InfoCard } from "@/components";
const allElipses = [
  "size-[140px]",
  "size-[340px]",
  "size-[540px]",
  "size-[940px]",
  "size[1340px]",
];

export default function Home() {
  return (
    <div className="flex  w-[1600px] h-screen relative">
      <div className=" flex justify-center items-center">
        {allElipses.map((el, index) => {
          return <Elipse key={index} className={el} />;
        })}
      </div>
      <div className="flex w-[800px] bg-[#F3F4F6]">
        <InfoCard date="sep 9 2025" city="tokyo" theme={true} image="sun.png" />
      </div>
      <div className="flex w-[800px] bg-[#0F141E]">night</div>
    </div>
  );
}
