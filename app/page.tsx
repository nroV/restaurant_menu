import Image from "next/image";
import Footer from "./components/footer";
import IntroTitle from "./components/IntroTitle";

export default function Home() {
  return (
    <main className=" absolute top-0 bottom-0 w-full flex justify-center items-center className={`${inter.className} bg-[url('/assets/restaurant.png')] bg-no-repeat bg-cover">
      <div >
        <IntroTitle />
        <Footer />
      </div>
    </main>
  );
}
