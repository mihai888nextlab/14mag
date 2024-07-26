"use server";

import connectDB from "@/app/dbConfig/config";
import { categoriiModel } from "@/app/dbConfig/models";

connectDB();

export async function addCategorie(nume: string) {
  console.log(nume);
  let categorie = new categoriiModel({ nume });
  await categorie.save();
}

export async function getCategorii() {
  let categorii = await categoriiModel.find();
  return JSON.stringify(categorii);
}
