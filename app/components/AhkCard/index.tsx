"use client";

export default function AhkCard() {
  return (
    <div className="flex flex-col">
      <div className="group relative grid w-[260px] grid-rows-[200px_120px_40px] bg-[#FFFEEC] rounded-md p-4 text-[#01A977]">
        <figure
          className="rounded-md mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(at 70% 30%, transparent 30%, currentColor 80%)",
          }}
        ></figure>
        <div className="pt-4">
          <p className="text-3xl font-bold">Ahmed</p>
          <p className="text-lg">Student of Design</p>
        </div>
        <footer className="flex items-end">
          <p className="flex rounded-sm border border-current px-1 py-px text-[9px] uppercase">
            Ahk
            <span
              className="-my-py mx-1 inline-block w-4 border border-r border-current"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, currentColor, currentColor 1px, transparent 1px, transparent 2px)",
              }}
            ></span>
            9 APR 2024
          </p>
        </footer>
      </div>
    </div>
  );
}
