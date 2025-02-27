"use client";
import { Elipse, InfoCard, SearchEngine } from "@/components";
import { useState } from "react";
const allElipses = [
  "size-[140px]",
  "size-[340px]",
  "size-[540px]",
  "size-[940px]",
  "size-[1340px]",
];

export default function Home() {
  const [data, setData] = useState([
    {
      date: "September 10, 2025",
      city: "Tokyo",
      theme: true,
      image:
        "https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__",
      temp: "26°",
      condition: "Bright",
      text: true,
    },
    {
      date: "September 10, 2025",
      city: "Tokyo",
      theme: false,
      image:
        "https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__",
      temp: "26°",
      condition: "Bright",
      text: false,
    },
  ]);

  return (
    <div className="flex  w-screen h-screen relative">
      <div className=" flex justify-center items-center">
        {allElipses.map((el, index) => {
          return <Elipse key={index} className={el} />;
        })}
      </div>
      <div className="flex w-1/2 bg-[#F3F4F6] ">
        <div className="flex absolute pl-[193px] pt-[230px]">
          <InfoCard data={data[0]} />
        </div>
      </div>
      <div className="flex w-1/2 bg-[#0F141E]">
        <div className="flex absolute pl-[193px] pt-[230px]">
          <InfoCard data={data[1]} />
        </div>
      </div>
      <div className=" flex absolute pt-10 pl-10">
        <SearchEngine></SearchEngine>
      </div>
    </div>
  );
}
