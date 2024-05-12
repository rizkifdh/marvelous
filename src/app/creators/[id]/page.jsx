"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotFound from "@/app/components/NotFound";

export default function page({ params }) {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchCharacters = async () => {
    setloading(true);
    const res = await fetch(`${apiUrl}/creators/${params.id}`);

    const data = await res.json();

    if (data && Object.keys(data).length) {
      setdata(data.data.results[0]);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <div className="flex text-5xl md:text-7xl items-center justify-center min-h-screen animate-pulse">
        Loading...
      </div>
    );
  }
  if (Object.keys(data).length < 1) {
    return <NotFound />;
  }
  if (data && data.thumbnail) {
    return (
      <>
        <div
          className="text-xl pt-5 pl-1 w-fit md:text-3xl cursor-pointer"
          onClick={router.back}
        >
          {"<"} back
        </div>
        <div className="flex gap-5 p-5 md:w-full">
          <Image
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            width={150}
            height={150}
            alt="marvel"
            style={{
              objectFit: "cover",
            }}
            className="md:w-1/2 xl:w-1/4"
          />
          <div className="flex flex-col w-1/2">
            <div className="text-3xl md:text-6xl pb-3">{data.fullName}</div>
            <div className="flex flex-col gap-1">
              <div className="text-md md:text-3xl">comics</div>
              {data.comics.items.map((item, index) => (
                <p className="text-xs md:text-xl line-clamp-1" key={index}>
                  {item.name}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-1 pt-5">
              <div className="text-md md:text-3xl">url's</div>
              {data.urls.map((item, index) => (
                <p className="text-xs md:text-xl" key={index}>
                  {item.type} :{" "}
                  <span className="cursor-pointer line-clamp-1 text-primary dark:text-link underline">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url}
                    </a>
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
