"use client";
import Image from "next/image";
import pointer from "../public/pointer.svg";
import x_logo from "../public/x.svg";
import FooterMenu from "./components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import AhkCard from "./components/AhkCard";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="flex flex-col min-h-screen">
      <div id="top-of-page" className="h-[100vh]">
        <header className="flex w-full justify-between">
          <div className="3D-logo">
            <AhkCard />
          </div>
          <div className="flex gap-1 w-10/12 text-right leading-tight bg-slate-300">
            <h1 className="w-full text-right leading-tight md:text-[73px]">
              Small Capsule of Curiosity
            </h1>
          </div>
        </header>
        <div className="flex justify-center items-center">
          <FooterMenu />
        </div>
      </div>
      <div className="h-[100vh]">
        <h1>YOO</h1>
      </div>
    </main>
  );
}
