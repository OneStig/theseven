// import Image from "next/image";
import SwapAnimation from "@/components/SwapAnimation";

export default function Home() {
  const currentDate = new Date();
  
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  return (
    <main>
      <SwapAnimation />
      <p className="author">Steven He <br /> {formattedDate}</p>
    </main>
  )
}