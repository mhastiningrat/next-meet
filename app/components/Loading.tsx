import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen z-[1000] flex justify-center items-center bg-slate-600">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
