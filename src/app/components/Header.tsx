import { FiShoppingCart } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header({ open }: { open: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 px-14 py-3 shadow-lg z-10 bg-white">
      <nav className="max-w-[1500px] grid grid-cols-[1fr_2fr_1fr]">
        <div>
          <h1 className="font-semibold m-0 text-4xl">
            <span className="text-red-500">14</span>
            <span className="text-blue-500">MAG</span>
          </h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Start a new search"
            className="border-[0.1rem] border-blue-700 rounded-3xl w-full h-full px-3 focus:right-1 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-end items-center cursor-pointer">
          <FiShoppingCart size={20} color="blue" />
          <p className="text-lg ml-3" onClick={() => open()}>
            Cart
          </p>
          <TiArrowSortedDown size={15} />
        </div>
      </nav>
    </header>
  );
}
