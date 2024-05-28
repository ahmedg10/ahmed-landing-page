"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import React from "react";

export default function FooterMenu() {
  return (
    <div className="toolbar fixed bottom-5 inline-flex max-h-12 items-center overflow-hidden rounded-full border-[#AFAAA] border-[1.5px] bg-white py-4 pl-4 pr-2">
      <div className="mr-3 text-sm text-gray-400">2 Components</div>
      <div className="h-6 w-px rounded-full bg-black/10 mr-5"></div>
      <div className="inline-flex gap-[2px] mr-2 items-center">
        <ScrollLink to="top-of-page" smooth={true} duration={750}>
          <button
            className="scroll-to-top-btn hover:bg-black/5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 33 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 3.75L30 18.9375"
                stroke="#AFAAAA"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 3.75L3 18.9375"
                stroke="#AFAAAA"
                stroke-width="6"
                stroke-linecap="round"
              />
              <path
                d="M16.5 5.4375L16.5 44.25"
                stroke="#AFAAAA"
                stroke-width="6"
                stroke-linecap="square"
              />
            </svg>
          </button>
        </ScrollLink>
        <Link href="https://twitter.com/ahkmeddd">
          <button
            className="x-button hover:bg-black/5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3253 0H27.736L18.1 11.0133L29.436 26H20.56L13.608 16.9107L5.65333 26H1.24L11.5467 14.22L0.671997 0H9.77333L16.0573 8.308L23.3253 0ZM21.7773 23.36H24.2213L8.44533 2.50133H5.82266L21.7773 23.36Z"
                fill="#AFAAAA"
              />
            </svg>
          </button>
        </Link>

        <Link href="https://www.linkedin.com/in/ahmed-ghaddah/">
          <button
            className="x-button hover:bg-black/5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="#AFAAAA"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
