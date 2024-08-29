import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage";
import Image from "next/image";

export default function Home() {
  return (
   <div className="overflow-hidden">
    <Header/>
    <HomePage/>
   </div>
  );
}
