"use client";

import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-3 right-3">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-dark text-white dark:bg-white dark:text-dark rounded-full p-2`}
      >
        <BiArrowFromBottom className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
