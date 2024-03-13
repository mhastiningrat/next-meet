import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Providers from "@/lib/redux/Provider";
import { Toaster } from "@/components/ui/toaster";
import { readUserSession } from "@/lib/supabase/action";
import { redirect } from "next/navigation";
// import { createClient } from "@supabase/supabase-js";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// const supabase = createClient(
//   "https://xwleiwqqktfjahbsdrcd.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3bGVpd3Fxa3RmamFoYnNkcmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMjUxMzMsImV4cCI6MjAyNTcwMTEzM30.pWSENVivVOdyP-Yk6gDhgFDkt48GNk3I4PbOQJlGBpw"
// );

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT Meet",
  description: "Generated using NextJS dong",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await readUserSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionContextProvider supabaseClient={supabase}> */}
        <Providers>
          <div className="w-screen h-screen flex ">
            <Sidebar />
            <div className="w-full  bg-gray-50">
              {children}
              <Toaster />
            </div>
          </div>
        </Providers>
        {/* </SessionContextProvider> */}
      </body>
    </html>
  );
}
