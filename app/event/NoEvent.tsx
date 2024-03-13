import React from "react";
import { LuCalendarOff } from "react-icons/lu";
const NoEvent = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <span className=" text-slate-300 mt-10 mb-8">
          <LuCalendarOff size={180} />
        </span>
        <h1 className=" text-2xl font-semibold text-slate-400">No Event Yet</h1>
      </div>
    </>
  );
};

export default NoEvent;
