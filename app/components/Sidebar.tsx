"use client";
import Link from "next/link";
import {
  LuBarChart,
  LuPlus,
  LuCalendar,
  LuApple,
  LuUsers,
  LuLayoutDashboard,
  LuFileSpreadsheet,
  LuSettings,
} from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={20} />,
  },
  {
    title: "Scheduled Event",
    path: "/event",
    icon: <LuCalendar size={20} />,
  },
  {
    title: "Report",
    path: "/report",
    icon: <LuFileSpreadsheet size={20} />,
  },
  {
    title: "Admin Center",
    path: "/admin",
    icon: <LuUsers size={20} />,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(true);
  const pathName = usePathname();
  const path = pathName.split("/");

  useEffect(() => {
    console.log(router);

    // GET(pathName)
    if (
      path[2] == "create" ||
      path[1] == "login" ||
      path[1] == "register" ||
      path[1] == "profile"
    ) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
    console.log(path);
  }, [pathName]);

  return (
    <>
      {showSideBar ? (
        <div className="xl:px-8 lg:px-8 sm:px-2 xl:w-[280px] lg:w-[280px] md:w-[200px] sm:w-0 xs:w-0 h-screen border-r-slate-300 flex flex-col transition-all duration-150 ease-in">
          <div className="py-4 flex items-center">
            <LuApple size={35} />
            <h1 className="pl-2 lg:text-2xl xl:text-2xl md:text-xl font-semibold">
              NEXT Meet
            </h1>
          </div>
          <div className="md:py-2 xl:lg:py-4 flex items-center">
            <Dialog>
              <DialogTrigger className="w-full">
                <span className="bg-black rounded-full py-2 text-md font-semibold w-full text-white flex justify-center items-center hover:bg-slate-600">
                  <LuPlus size={20} />
                  <h1 className="pl-2 text-sm font-semibold">Create</h1>
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">
                    Select Meeting Type
                  </DialogTitle>
                  <Link href="/event/create">
                    <button className="hover:bg-black hover:text-yellow-400 w-full  border rounded-lg bg-slate-100 h-[60px] flex flex-col items-center justify-around">
                      <span className="font-semibold text-xl">Online</span>
                      <span className="text-xs font-light ">
                        Good for coffe chat,1:1 Interviews,etc
                      </span>
                    </button>
                  </Link>
                  <Link href="/event/create/group" className=" ">
                    <button className="hover:bg-black hover:text-yellow-400 w-full  border rounded-lg bg-slate-100 h-[60px] flex flex-col items-center justify-around">
                      <span className="font-semibold text-xl">Offline</span>
                      <span className="text-xs font-light ">
                        Good for webinars,online class,etc
                      </span>
                    </button>
                  </Link>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-5 flex-grow">
            {menu.map((i) => {
              return (
                <Link
                  key={i.title}
                  href={i.path}
                  className="py-2 flex mb-5 pl-4 hover:bg-black hover:text-white hover:rounded-md hover:border-slate-500 hover:border-1"
                >
                  {i.icon}
                  <h1 className="pl-2 text-sm font-semibold">{i.title}</h1>
                </Link>
              );
            })}
          </div>
          {/* <div className="pl-4 py-4 flex items-center mb-5 rounded-lg bg-slate-200 cursor-pointer hover:bg-black hover:text-white">
            <LuSettings size={20} />
            <h1 className="pl-2 text-sm font-semibold">Settings</h1>
          </div> */}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sidebar;
