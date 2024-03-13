"use server";

import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "./server";
import { redirect } from "next/navigation";

export async function readUserSession() {
  noStore();
  const supabase = await createSupabaseServerClient();
  // console.log(supabase);
  return await supabase.auth.getSession();
}

export async function readUserName() {
  noStore();
  const supabase = await createSupabaseServerClient();
  // console.log(supabase);
  return await supabase.auth.getUser();
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
