"use server";

import { redirect } from "next/navigation";

export default async function login(_formStae: unknown, formData: FormData) {
  let username = formData.get("username") as string;
  let password = formData.get("password") as string;

  if (username !== "admin" || password !== "admin") {
    return "Invalid credentials";
  }

  redirect("/admin/dashboard");
}
