"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function signUpWithEmailAndPassword(data: {
  username: string;
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {}

export async function signInWithGoogle() {
  const supabase = await createSupabaseServerClient();

  const result = supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      scopes: "https://www.googleapis.com/auth/calendar",
      redirectTo: `${location.origin}/api`,
    },
  });
}
