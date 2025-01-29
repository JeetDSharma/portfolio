import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import BodySection from "@/components/Body";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <BodySection/>
    </div>
  );
}

