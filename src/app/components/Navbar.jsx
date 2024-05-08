"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  Switch,
} from "@headlessui/react";

import { FaMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";
import { LuSunMedium } from "react-icons/lu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [darkMode, setdarkMode] = useState(false);
  const [isShowing, setisShowing] = useState(false);

  const handleDarkMode = () => {
    if (resolvedTheme === "light") {
      setdarkMode(true);
      setTheme("dark");
    } else {
      setdarkMode(false);
      setTheme("light");
    }
  };

  useEffect(() => {
    setdarkMode(false);
    setTheme("light");
  }, []);

  const params = usePathname();
  console.log("params", params);

  return (
    <div className="bg-white dark:bg-dark pt-5 pb-5">
      <div className="text-sm text-sky-500 pb-3">
        (this web still in development)
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-red-500 text-white px-3 py-2 text-2xl md:text-5xl">
          Marvelous
        </div>
        <div className=" items-center gap-5 md:hidden sm:flex">
          <Switch
            checked={darkMode}
            onChange={handleDarkMode}
            className="group inline-flex h-8 w-14 items-center rounded-full bg-dark text-white transition data-[checked]:bg-dark data-[checked]:dark:bg-white"
          >
            {/* <span className="p-2">
            <FaMoon></FaMoon>
          </span> */}
            <span className="size-9 -translate-x-1 bg-white text-dark flex items-center justify-center rounded-full transition group-data-[checked]:translate-x-6 font-bold dark:text-white dark:bg-dark">
              {darkMode ? <LuSunMedium /> : <FaMoon />}
            </span>
          </Switch>
          <Menu>
            <MenuButton
              onClick={() => setisShowing(!isShowing)}
              className="text-3xl z-50"
            >
              {isShowing ? <CgMenuMotion /> : <IoMenu />}
            </MenuButton>
            <Transition
              show={isShowing}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <MenuItems
                anchor="bottom"
                className="p-2 pr-5 z-50 bg-white dark:bg-dark"
              >
                <MenuItem>
                  <a
                    className={`${
                      params === "/" ? "text-sky-700 underline" : null
                    } block hover:text-sky-700 hover:underline`}
                    href="/"
                  >
                    Characters
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className={`${
                      params === "/comics" ? "text-sky-700 underline" : null
                    } block hover:text-sky-700 hover:underline`}
                    href="/comics"
                  >
                    Comics
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className={`${
                      params === "/creators" ? "text-sky-700 underline" : null
                    } block hover:text-sky-700 hover:underline`}
                    href="/creators"
                  >
                    Creators
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className={`${
                      params === "/series" ? "text-sky-700 underline" : null
                    } block hover:text-sky-700 hover:underline`}
                    href="/series"
                  >
                    Series
                  </a>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
        <div className=" gap-5 text-2xl pr-5 hidden md:flex">
          <Switch
            checked={darkMode}
            onChange={handleDarkMode}
            className="mr-5 md:text-xl group inline-flex h-8 w-16 items-center rounded-full bg-dark text-white transition data-[checked]:bg-dark data-[checked]:dark:bg-white"
          >
            {/* <span className="p-2">
            <FaMoon></FaMoon>
          </span> */}
            <span className="size-9 -translate-x-1 bg-white text-dark flex items-center justify-center rounded-full transition group-data-[checked]:translate-x-8 font-bold dark:text-white dark:bg-dark">
              {darkMode ? <LuSunMedium /> : <FaMoon />}
            </span>
          </Switch>
          <Link
            href="/"
            className={`${
              params === "/" ? "text-sky-700 underline" : null
            } block hover:text-sky-700 hover:underline`}
          >
            Characters
          </Link>
          <Link
            href="/comics"
            className={`${
              params === "/comics" ? "text-sky-700 underline" : null
            } block hover:text-sky-700 hover:underline`}
          >
            Comics
          </Link>
          <Link
            href="/creators"
            className={`${
              params === "/creators" ? "text-sky-700 underline" : null
            } block hover:text-sky-700 hover:underline`}
          >
            Creators
          </Link>
          <Link
            href="/series"
            className={`${
              params === "/series" ? "text-sky-700 underline" : null
            } block hover:text-sky-700 hover:underline`}
          >
            Series
          </Link>
        </div>
      </div>
    </div>
  );
}
