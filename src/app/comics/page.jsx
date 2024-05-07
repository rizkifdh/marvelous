"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Comics() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [data, setdata] = useState([]);
  const fetchComics = async () => {
    const res = await fetch(`${apiUrl}/comics`);

    const data = await res.json();

    setdata(data.data.results);
  };

  useEffect(() => {
    fetchComics();
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
      <div className="text-3xl underline md:text-5xl">comics</div>
      <div className="grid grid-rows-3 gap-5 pt-10 justify-center md:grid-cols-4">
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
                />
              </div>
              <div className="bg-sky-700 text-white truncate block text-center text-3xl p-5">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
