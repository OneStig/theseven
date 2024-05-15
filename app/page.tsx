// import Image from "next/image";
import SwapAnimation from "@/components/SwapAnimation";

export default function Home() {
  const currentDate = new Date();
  
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const str = 'theseven.dev';
  const swapOrder = [1, 6, 7, 0, 2, 3, 4, 5, 8, 9, 10, 11];

  return (
    <main>
      <SwapAnimation str={str} swapOrder={swapOrder} />
      <p className="author"><br/>{formattedDate}</p>
    </main>
  )
}