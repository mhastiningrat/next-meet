import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import DashboardContent from "./DashboardContent";
import { readUserSession } from "@/lib/supabase/action";
import { redirect } from "next/navigation";

// import { headers } from "next/headers";
// const headersList = headers();
// const domain = headersList.get("x-forwarded-host") || "";
// const protocol = headersList.get("x-forwarded-proto") || "";
// const pathname = headersList.get("x-invoke-path") || "";
const Dashboard = async () => {
  const { data } = await readUserSession();

  console.log("sesion", data);
  if (!data.session) {
    return redirect("/login");
  }
  return (
    <div className="w-full h-full flex flex-col">
      <Content>
        <DashboardContent />
      </Content>
    </div>
  );
};

export default Dashboard;
