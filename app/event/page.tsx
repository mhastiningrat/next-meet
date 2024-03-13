import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import EventContent from "./EventContent";
import { readUserSession } from "@/lib/supabase/action";
import { redirect } from "next/navigation";
const Event = async () => {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect("/auth/login");
  }
  return (
    <div className="w-full h-full flex flex-col">
      <Content>
        <EventContent />
      </Content>
    </div>
  );
};

export default Event;
