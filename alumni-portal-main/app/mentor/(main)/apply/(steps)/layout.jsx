"use client";

export default function ApplyLayout({ children }) {
  return (
    <>
      <div className="py-24 px-4 flex flex-col items-center">
        <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%]">
          <h1 className="text-3xl text-slate-900 font-extrabold block self-start">
            Apply as a mentor
          </h1>
          {children}
        </div>
      </div>
    </>
  );
}
