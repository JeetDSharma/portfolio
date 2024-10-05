import Image from "next/image";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100 ">
      <div className="w-full max-w-7xl"><Hero/></div>
    </main>
  );
}
