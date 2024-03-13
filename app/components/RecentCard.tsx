"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LuMoreVertical, LuCopy, LuTrash2 } from "react-icons/lu";
const RecentCard = () => {
  return (
    <div className="rounded-md border-sm border cursor-pointer shadow-md border-t-4 border-t-yellow-400  bg-white p-4 w-full h-[150px] flex flex-col justify-between hover:shadow-md hover:border-t-black">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Daily Meeting</h1>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LuMoreVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Add internal note</DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex gap-1 text-sm p-1 text-red-600 ">
                <LuTrash2 size={20} />
                <span>Delete</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h1 className="text-sm text-slate-600">30 Minues,One-on-One</h1>
      <p className="text-slate-400 text-sm">"Tolong dipersiapkan materinya"</p>
      <div className="flex justify-end">
        <button className="flex gap-1 text-sm p-1 text-blue-400 hover:text-yellow-400">
          <LuCopy size={20} />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

export default RecentCard;
