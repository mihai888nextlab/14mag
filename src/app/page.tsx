import Header from "./components/Header";
import bg from "./assets/Very good prices.png";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full h-screen px-10 z-0">
        <div
          className="w-full h-3/4 rounded-lg bg-red-500 mt-[12.5vh]"
          style={{
            backgroundImage: "url('" + bg.src + "')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </main>
    </div>
  );
}
