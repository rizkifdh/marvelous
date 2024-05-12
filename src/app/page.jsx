"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Link from "next/link";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [data, setdata] = useState([]);
  const [total, settotal] = useState();
  const [offset, setoffset] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);

  const fetchCharacters = async () => {
    setloading(true);
    setoffset(offset);
    const res = await fetch(`${apiUrl}/characters?offset=${offset}&limit=10`);

    const data = await res.json();

    settotal(data.data.total);
    setdata(data.data.results);
    setloading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, [offset]);

  useEffect(() => {
    setpageCount(Math.ceil(total / 10));
  }, [total]);

  if (loading) {
    return (
      <div className="flex text-5xl md:text-7xl items-center justify-center min-h-screen animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center pt-10 gap-5">
      <div className="text-3xl md:text-5xl ">characters</div>
      <div className="grid grid-rows-3 gap-5 pt-10 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <div key={item.id} className="">
            <Link href={`characters/${item.id}`}>
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
                <div className="bg-secondary text-white truncate block text-center text-3xl p-5">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        setcurrentPage={setcurrentPage}
        setoffset={setoffset}
      />
    </main>
  );
}
