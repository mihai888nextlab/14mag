"use server";

import connectDB from "@/app/dbConfig/config";
import { produseModel } from "@/app/dbConfig/models";

connectDB();

export async function addProdus(
  nume: string,
  categorie: string,
  desc: string,
  pret: number
) {
  let produs = new produseModel({ nume, categorie, desc, pret });
  await produs.save();
}

export async function getProduse() {
  let produse = await produseModel.find();
  return JSON.stringify(produse);
}
