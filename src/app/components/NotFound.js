import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col text-xl md:text-2xl items-center justify-center min-h-screen">
      404 | data or page not found
      <span>
        back to{" "}
        <Link href="/" className="text-primary dark:text-link">
          homepage
        </Link>
      </span>
    </div>
  );
}
