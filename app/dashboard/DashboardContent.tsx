"use client";
import React, { useEffect } from "react";
import IncomingCard from "../components/UpcomingCard";
import PersonalNotes from "../components/PersonalNotes";
import RecentCard from "../components/RecentCard";
import UpcomingContent from "./UpcomingContent";

const DashboardContent = async () => {
  return (
    <>
      <div className="py-4 px-8 shadow-inner">
        <h1 className="font-bold text-2xl text-black mb-7">Upcoming Event</h1>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
          <UpcomingContent />
        </div>
      </div>
      <div className="py-4 px-8">
        <h1 className="font-bold text-2xl text-black mb-7">Recent Event</h1>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
          <RecentCard />
          <RecentCard />
          <RecentCard />
          <RecentCard />
        </div>
      </div>
      <div className="py-4 px-8">
        <h1 className="font-bold text-2xl text-black mb-7">Personal Notes</h1>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
          <PersonalNotes />
          <PersonalNotes />
          <PersonalNotes />
          <PersonalNotes />
          <PersonalNotes />
          <PersonalNotes />
          <PersonalNotes />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
