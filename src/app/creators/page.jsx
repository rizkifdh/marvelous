"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
export default function Creators() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [data, setdata] = useState([]);
  const fetchCreators = async () => {
    const res = await fetch(`${apiUrl}/creators`);

    const data = await res.json();

    setdata(data.data.results);
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  if (data?.length < 1) {
    return (
      <div className="flex text-5xl md:text-7xl items-center justify-center min-h-screen animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center pt-10">
      <div className="text-3xl md:text-5xl">creators</div>
      <div className="grid grid-rows-3 gap-5 pt-10 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <div key={item.id} className="">
            <div className="flex flex-col w-[300px] h-[380px]">
              <div style={{ position: "relative", height: "400px" }}>
                <Image
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  fill
                  sizes="(min-width: 300px) 50vw, 100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  onLoadingComplete={(image) =>
                    image.classList.remove("animate-pulse")
                  }
                />
              </div>
              <div className="bg-sky-700 text-white truncate block text-center text-3xl p-5">
                {item.fullName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
