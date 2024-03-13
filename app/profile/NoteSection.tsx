import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuPenLine } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuChevronLeft } from "react-icons/lu";

const NoteSection = () => {
  return (
    <div className="flex flex-col  w-1/3 py-8 rounded-lg border h-full">
      <div className="flex flex-col justify-start items-start px-8 ">
        <h1 className="font-bold text-2xl text-black mb-7">Personal Notes</h1>
      </div>

      <div className="grid grid-cols-1 items-center px-4 py-2 text-sm">
        <ScrollArea className="h-[600px] w-full p-4 ">
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Meeting with manager
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <div className="flex justify-between items-end">
              {" "}
              <p className="pt-4 text-sm text-slate-500">
                Create online meeting schedule ...
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Weekly Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Meeting with product
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Urgent Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Daily Meeting
              </label>
              <p className="hover:text-blue-600">
                <LuPenLine />
              </p>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              Create online meeting schedule ...
            </p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default NoteSection;
