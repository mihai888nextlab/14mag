"use client";

import { addCategorie, getCategorii } from "@/app/api/auth/categorii";
import { addProdus, getProduse } from "@/app/api/auth/produse";
import Loading from "@/app/components/Loading";
import { set } from "mongoose";
import { useEffect, useRef, useState } from "react";

interface Category {
  _id: string;
  nume: string;
}

interface Produs {
  _id: string;
  nume: string;
  categorie: string;
  desc: string;
  pret: number;
}

export default function Dashboard() {
  let nuemInp = useRef<HTMLInputElement | null>(null);

  let numeProdusInp = useRef<HTMLInputElement | null>(null);
  let categorieSelect = useRef<HTMLSelectElement | null>(null);
  let descInp = useRef<HTMLInputElement | null>(null);
  let pretInp = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [produse, setProduse] = useState<Produs[]>([]);

  const addCategorieOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await addCategorie(nuemInp.current?.value || "");
    let categorii = await getCategorii();
    setCategories(JSON.parse(categorii));
    setLoading(false);
  };

  const addProdusOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await addProdus(
      numeProdusInp.current?.value || "",
      categorieSelect.current?.value || "",
      descInp.current?.value || "",
      parseInt(pretInp.current?.value || "0")
    );
    let produse = await getProduse();
    setProduse(JSON.parse(produse));
    setLoading(false);
  };

  useEffect(() => {
    let fct = async () => {
      setLoading(true);

      let categorii = await getCategorii();
      setCategories(JSON.parse(categorii));

      let produse = await getProduse();
      setProduse(JSON.parse(produse));

      setLoading(false);
    };

    fct();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <h1 className="text-center">Dashboard</h1>

      <div className="my-10">
        <h2>Categories</h2>
        <form onSubmit={addCategorieOnSubmit}>
          <input
            type="text"
            placeholder="Nume categorie"
            className="border-2"
            ref={nuemInp}
          />
          <button type="submit" className="bg-blue-500 p-5">
            Adauga
          </button>
        </form>
        <ul>
          {categories.map((category: Category) => (
            <li key={category._id}>{category.nume}</li>
          ))}
        </ul>
      </div>

      <div className="my-10">
        <h2>Produse</h2>
        <form onSubmit={addProdusOnSubmit}>
          <input
            type="text"
            placeholder="Nume produs"
            className="border-2"
            ref={numeProdusInp}
          />
          <input
            type="text"
            placeholder="Desc produs"
            className="border-2"
            ref={descInp}
          />
          <input
            type="number"
            placeholder="Pret produs"
            className="border-2"
            ref={pretInp}
          />
          <select name="select" ref={categorieSelect}>
            {categories.map((category: Category) => (
              <option key={category._id} value={category._id}>
                {category.nume}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 p-5">
            Adauga
          </button>
        </form>
        <ul>
          {produse.map((produs: Produs) => (
            <li key={produs._id}>
              Nume: {produs.nume}; Desc: {produs.desc}; Price: {produs.pret};
              Categorie:{" "}
              {categories.find((cat) => cat._id === produs.categorie)?.nume ||
                ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
