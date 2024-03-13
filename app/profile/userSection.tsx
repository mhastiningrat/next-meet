import { Input } from "@/components/ui/input";
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

const UserSection = () => {
  return (
    <div className="flex flex-col w-1/3 py-8 rounded-lg border">
      <div className="flex flex-col justify-start items-start px-8 ">
        <h1 className="font-bold text-2xl text-black mb-7">Profile</h1>
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-8 ">
        <Image
          className="rounded-full border h-[150px] w-[150px]"
          src="/bpi-logo.png"
          width={50}
          height={100}
          alt="user-profile"
        />
        <button className="font-semibold w-full mt-4 bg-black text-sm text-white rounded-md border py-2 hover:bg-[#FD9840] hover:text-black">
          Change Photo Profile
        </button>
      </div>
      <div className="grid grid-cols-2 items-center px-8 py-2 text-sm">
        <label htmlFor="username">Full name</label>
        <Input
          className="bg-white"
          type="text"
          value="Allan Bradley"
          disabled
        />
      </div>
      <div className="grid grid-cols-2 items-center px-8 py-2 ">
        <label htmlFor="username">Email</label>
        <Input
          className="bg-white"
          type="email"
          value="ab@gmail.com"
          disabled
        />
      </div>
      <div className="grid grid-cols-2 items-center px-8 py-2 ">
        <label htmlFor="username">Password</label>
        <Input
          className="bg-white"
          type="password"
          value="Allan Bradley"
          disabled
        />
      </div>
      <div className="grid grid-cols-2 items-center px-8 py-2 ">
        <label htmlFor="username">Role</label>
        <Select value="Administrator" disabled>
          <SelectTrigger className="w-full py-5">
            <SelectValue placeholder="Your Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Administrator">Administrator</SelectItem>
            <SelectItem value="Host">Host</SelectItem>
            <SelectItem value="Participant">Participant</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 items-center px-8 py-2 ">
        <button className="w-full bg-black text-sm font-semibold text-white rounded-md border py-2 hover:bg-[#FD9840] hover:text-black">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UserSection;
