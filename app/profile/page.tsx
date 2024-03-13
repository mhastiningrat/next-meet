import React from "react";
import UserSection from "./userSection";
import LogSection from "./LogSection";
import NoteSection from "./NoteSection";
import HeaderUser from "../components/HeaderUser";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

const ProfilePage = () => {
  return (
    <div className="bg-white w-full gap-2 py-4 px-4 h-screen flex flex-col">
      <div className="flex justify-between items-center">
        <Link
          href="/dashboard"
          className="text-2xl font-semibold cursor-pointer flex gap-2 hover:text-yellow-400"
        >
          <LuChevronLeft size={30} /> Back
        </Link>
        <HeaderUser />
      </div>
      <div className="flex gap-2">
        <UserSection />
        <LogSection />
        <NoteSection />
      </div>
    </div>
  );
};

export default ProfilePage;
