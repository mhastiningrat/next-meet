import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuChevronLeft } from "react-icons/lu";

const LogSection = () => {
  return (
    <div className="flex flex-col  w-1/3 py-8 rounded-lg border h-full">
      <div className="flex flex-col justify-start items-start px-8 ">
        <h1 className="font-bold text-2xl text-black mb-7">Activity Logs</h1>
      </div>

      <div className="grid grid-cols-1 items-center px-4 py-2 text-sm">
        <ScrollArea className="h-[600px] w-full p-4 ">
          <div className="flex flex-col rounded-sm border px-2 py-2 text-sm mt-1 cursor-pointer hover:bg-slate-100">
            <div className="flex justify-between">
              <label
                className="text-sm font-bold text-slate-600"
                htmlFor="activity"
              >
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">3 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">5 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 weeks ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 weeks 2 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">3 weeks ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 months ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 days ago</p>
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
                Activity 1
              </label>
              <p className="text-xs text-slate-400">1 days ago</p>
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

export default LogSection;
