"use client";
import Image from "next/image";
import pointer from "../public/pointer.svg";
import x_logo from "../public/x.svg";
import FooterMenu from "./components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import AhkCard from "./components/AhkCard";
import CopyButton from "./components/copyButton";
import FeedbackPopUp from "./components/FeedbackPopUp";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  //class="pt:10 flex max-w-[1400px] flex-col items-center justify-center gap-20 p-5 md:mx-auto md:gap-56 md:p-5 md:pt-12"
  return (
    <main className="flex flex-col min-h-screen">
      <div
        id="top-of-page"
        className="flex flex-col max-w-[1500px] justify-center items-center md:gap-20 md:p-5 md:pt-10 "
      >
        <header className="flex w-full justify-between">
          <div className="spinning-animation m-3">
            <svg width="40" height="40" viewBox="0 0 24 24">
              <path
                fill="#F96611"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-1 w-10/12 text-right leading-tight">
            <h1 className="font-sincopa text-4xl w-full text-right leading-tight md:text-[73px] selection:bg-[#F96611]/80">
              Small Capsule of Curiosity
            </h1>
            <div className=" font-scribble text-lg md:text-2xl selection:bg-[#F96611]/80">
              PLAYGROUND BY <span className="font-scribble">AHMED</span>
            </div>
          </div>
        </header>
        <div className="z-10 flex justify-center items-center">
          <FooterMenu />
        </div>
        <div className="flex flex-col w-full gap-24 md:gap-32">
          <div className="relative flex w-full flex-col items-start gap-12 md:flex-row md:gap-x-40 ">
            <div className="flex flex-col gap-4 md:gap-9 w-full md:w-[256px]">
              <div className="flex gap-3 flex-col w-full">
                <h2 className="text-sm font-medium selection:bg-[#F96611]/80">
                  Copy Button
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed selection:bg-[#F96611]/80 selection:text-black">
                  Understanding a component solution that addresses visual form
                  of copying without having text take up visual space
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="text-[12px] bg-slate-200 text-slate-500 w-fit rounded-md pl-2 pr-2 pt-[2px] pb-[2px] ">
                  react
                </div>
                <div className="text-[12px] bg-slate-200 text-slate-500 w-fit rounded-md pl-2 pr-2 pt-[2px] pb-[2px] ">
                  framer-motion
                </div>
                <div className="text-[12px] bg-slate-200 text-slate-500 w-fit rounded-md pl-2 pr-2 pt-[2px] pb-[2px] ">
                  tailwindcss
                </div>
              </div>
            </div>

            <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-gray md:h-[500px] md:flex-1">
              <CopyButton />
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-start gap-12 md:flex-row md:gap-x-40 ">
          <div className="flex flex-col gap-4 md:gap-9 w-full md:w-[256px]">
            <div className="flex gap-3 flex-col w-full">
              <h2 className="text-sm font-medium selection:bg-[#F96611]/80">
                Copy Button
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed selection:bg-[#F96611]/80 selection:text-black">
                Understanding a component solution that addresses visual form of
                copying without having text take up visual space
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="text-[12px] bg-slate-200 text-slate-500 w-fit rounded-md pl-2 pr-2 pt-[2px] pb-[2px] ">
                react
              </div>
              <div className="text-[12px] bg-slate-200 text-slate-500 w-fit rounded-md pl-2 pr-2 pt-[2px] pb-[2px] ">
                framer-motion
              </div>
              <div className="text-[12px] bg-slate-200 text-slate-500 w-fit rounded-md pl-2 pr-2 pt-[2px] pb-[2px] ">
                tailwindcss
              </div>
            </div>
          </div>

          <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-gray md:h-[500px] md:flex-1">
            <FeedbackPopUp />
          </div>
        </div>
      </div>
    </main>
  );
}
