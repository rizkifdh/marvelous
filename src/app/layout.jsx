import { Bangers } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import Navbar from "./components/Navbar";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Marvelous",
  description: "information about marvel",
};

export default function RootLayout({ children }) {
  const date = new Date().getFullYear();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bangers.className} p-5`}>
        <Providers>
          <div className="sticky top-0 z-40">
            <Navbar />
          </div>
          {children}

          <footer className="pt-5">
            <hr className="font-bold" />
            <div className="pt-3 flex text-xl justify-between">
              <a
                href="http://marvel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                Data provided by Marvel
              </a>
              <a
                href="http://rizki-fadilah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                © Created by Rizki Fadilah, {date}
              </a>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
