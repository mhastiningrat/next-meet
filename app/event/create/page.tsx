"use client";

import React, { useState } from "react";
import CreateForm from "./CreateForm";
import { useSelector } from "react-redux";
import Loading from "@/app/components/Loading";
import { Calendar } from "@/components/ui/calendar";

const CreateEvent = () => {
  const [date, setDate] = useState<any>(new Date());
  const loading = useSelector((state: any) => state.loading);
  return (
    <>
      {loading[0].show ? (
        <Loading />
      ) : (
        <div className="bg-gray-100 flex">
          <CreateForm date={date} />
          <div className="px-4 flex items-center justify-center w-full">
            <div className=" bg-white w-3/4 border-2 h-3/4 rounded-2xl">
              <div className="rounded-t-2xl bg-black text-white text-sm p-4 ">
                <strong> This is a preview. </strong>
                To book an event,share the link with your invitees.
              </div>
              <div className="grid grid-cols-1 p-4 my-auto">
                <div className="flex justify-center  mb-5">
                  <h1 className="text-slate-600 font-semibold">
                    Select Event Date
                  </h1>
                </div>

                <div className="flex justify-center items-center h-full ">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEvent;
