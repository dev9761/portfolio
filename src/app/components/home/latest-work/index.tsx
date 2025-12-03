"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">
                ( {workData?.length ?? "00"} )
              </p>
            </div>

            {/* Work Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    {/* Image with Hover Overlay */}
                    <div className="relative">
                      <Image
                        src={getImgPath(value?.image)}
                        alt={value?.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                      />

                      {/* Overlay Link */}
                      <Link
                        href={value?.link ?? "#"}
                        target="_blank"
                        className="absolute top-0 left-0 
                          backdrop-blur-xs bg-primary/15 
                          w-full h-full hidden group-hover:flex 
                          rounded-lg transition cursor-pointer"
                      >
                        <span className="flex justify-center items-center p-5 w-full">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#FE4300"
                            />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>

                    {/* Title & Arrow */}
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        {/* Title Link */}
                        <Link href={value?.link ?? "#"} target="_blank">
                          <h5 className="hover:text-primary transition">
                            {value?.title}
                          </h5>
                        </Link>

                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right-arrow-icon"
                          width={30}
                          height={30}
                        />
                      </div>

                      {/* Optional Slug Link (Case Study Page) */}
                      {/* 
                      <Link href={`/${value.slug}`}>
                        <p className="text-sm text-gray-500 underline">
                          View Case Study
                        </p>
                      </Link>
                      */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
