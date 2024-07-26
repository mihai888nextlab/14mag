import { cookies } from "next/headers";

export async function setSession(sessionData: any) {
  cookies().set("session", sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
}

export async function getSession() {
  return cookies().get("session")?.value;
}

export async function removeSession() {
  setSession("");
}
