"use server";

import { redirect } from "next/navigation";
import { setSession } from "../sessions";
import jwt from "jsonwebtoken";

export default async function login(_formStae: unknown, formData: FormData) {
  let username = formData.get("username") as string;
  let password = formData.get("password") as string;

  if (username !== "admin" || password !== "admin") {
    return "Invalid credentials";
  }

  console.log(process.env.JWT_SECRET);

  let sessionData = jwt.sign({ auth: "true" }, process.env.JWT_SECRET || "");
  setSession(sessionData);
  redirect("/admin/dashboard");
}
