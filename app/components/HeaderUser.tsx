"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { readUserName, readUserSession, signOut } from "@/lib/supabase/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LuUser } from "react-icons/lu";
import {
  LuMoreVertical,
  LuCopy,
  LuTrash2,
  LuArrowRightFromLine,
  LuBell,
} from "react-icons/lu";

const HeaderUser = () => {
  const [user, setUser] = useState<any>("");

  const getUser = async () => {
    const { data } = await readUserName();
    setUser(data.user?.email);
  };
  const co = async () => {
    await signOut();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="flex px-8 py-4 justify-end ">
        <div className="flex gap-4 items-center">
          <Switch />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="rounded-full bg-[#FD9840] p-2 outline-none hover:bg-slate-100 hover:border hover:border-1 hover:border-black">
                <LuBell size={30} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {" "}
                <h1>For you</h1>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col w-full border-sm rounder-md ">
                  <h1 className="text-sm font-semibold">
                    Meeting with manager
                  </h1>
                  <p className="text-xs">harap datang tepat waktu</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col w-full border-sm rounder-md ">
                  <h1 className="text-sm font-semibold">
                    Meeting with manager
                  </h1>
                  <p className="text-xs">harap datang tepat waktu</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col w-full border-sm rounder-md ">
                  <h1 className="text-sm font-semibold">
                    Meeting with manager
                  </h1>
                  <p className="text-xs">harap datang tepat waktu</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="rounded-full bg-slate-300 p-2 outline-none hover:bg-slate-100 hover:border hover:border-1 hover:border-black">
                <LuUser size={30} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {" "}
                <h1>{user}</h1>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/profile"
                  className="flex gap-2 text-sm p-1 text-slate-800 "
                >
                  <LuUser size={20} />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  co();
                }}
              >
                <button className="flex gap-2 text-sm p-1 text-slate-800 ">
                  <LuArrowRightFromLine size={20} />
                  <span>Sign out</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default HeaderUser;
