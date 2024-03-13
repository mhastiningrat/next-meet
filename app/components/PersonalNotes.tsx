import React from "react";

const PersonalNotes = () => {
  return (
    <>
      <div className="rounded-md border-r-black border-r-4 border-sm border shadow-md bg-white p-2 w-full h-[60px] flex flex-col justify-between hover:border-r-yellow-400">
        <div className="flex flex-col">
          <h1 className="font-semibold text-sm">Daily Meeting</h1>
          <p className="text-slate-400 text-xs truncate">
            "Tolong dipersiapkan materinya"
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalNotes;
