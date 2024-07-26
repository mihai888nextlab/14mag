"use client";

import Header from "./components/Header";
import bg from "./assets/Very good prices.png";
import Produs from "./components/produs";
import { useEffect, useState } from "react";
import { getCategorii } from "./api/auth/categorii";
import { getProduse } from "./api/auth/produse";
import Loading from "./components/Loading";
import placeholder from "@/app/assets/placeholder-image.jpg";

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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [produse, setProduse] = useState<Produs[]>([]);

  const [cart, setCart] = useState<Produs[]>([]);
  const [openCart, setOpenCart] = useState(false);

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
      {openCart && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-900 bg-opacity-20 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-lg bg-white shadow-2xl p-5">
            <div className="flex justify-between items-center">
              <div></div>
              <h1 className="text-center">Cart</h1>
              <p
                className="font-bold text-4xl cursor-pointer"
                onClick={() => setOpenCart(false)}
              >
                X
              </p>
            </div>

            <div className="w-full h-3/4 overflow-y-auto">
              {cart.map((produs) => (
                <div
                  className="bg-gray-300 h-20 rounded-lg p-3 flex flex-row my-5"
                  key={produs._id}
                >
                  <div
                    className="h-full w-16 rounded-lg mr-5"
                    style={{
                      backgroundImage: "url('" + placeholder.src + "')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div>
                    <h3 className="text-lg font-semibold">{produs.nume}</h3>
                    <p className="text-sm">{produs.pret} RON</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Header open={() => setOpenCart(true)} />
      <main className="w-full px-10 z-0 static">
        <div
          className="w-full h-[75vh] rounded-lg bg-red-500 my-[12.5vh]"
          style={{
            backgroundImage: "url('" + bg.src + "')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          {categories.map((categorie) => (
            <div className="my-5" key={categorie._id}>
              <h2 className="text-3xl font-semibold mb-5">{categorie.nume}</h2>
              <div className="grid w-full grid-cols-6 gap-5">
                {produse
                  .filter((produs) => produs.categorie === categorie._id)
                  .map((produs) => (
                    <Produs
                      key={produs._id}
                      _id={produs._id}
                      nume={produs.nume}
                      pret={produs.pret}
                      desc={produs.desc}
                      categorie={produs.categorie}
                      add={(produs) => setCart([...cart, produs])}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full bg-black p-5 mt-36">
        <h1 className="text-white m-0">Made by mihai888nextlab</h1>
      </footer>
    </div>
  );
}
