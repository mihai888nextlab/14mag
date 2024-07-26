import placeholder from "@/app/assets/placeholder-image.jpg";
import { strict } from "assert";

interface Produs {
  _id: string;
  nume: string;
  categorie: string;
  desc: string;
  pret: number;
}

interface Props {
  _id: string;
  nume: string;
  desc: string;
  pret: number;
  categorie: string;
  add: (produs: Produs) => void;
}

export default function Produs(props: Props) {
  return (
    <div className="bg-gray-300 h-80 rounded-lg p-3 flex flex-col justify-between">
      <div
        className="h-2/3 w-full rounded-lg"
        style={{
          backgroundImage: "url('" + placeholder.src + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <h3 className="text-lg font-semibold">{props.nume}</h3>
        <p className="text-sm">{props.pret} RON</p>
      </div>
      <button
        className="bg-blue-300 rounded-lg w-full h-6 py-5 flex items-center justify-center font-semibold"
        onClick={() =>
          props.add({
            _id: props._id,
            nume: props.nume,
            categorie: props.categorie,
            desc: props.desc,
            pret: props.pret,
          })
        }
      >
        Add
      </button>
    </div>
  );
}
