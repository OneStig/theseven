// import Image from "next/image";
import SwapAnimation from "@/components/SwapAnimation";
import Abstract from "./abstract";

export default function Home() {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const str = 'the seven';
  const swapOrder = [1, 7, 8, 6, 0, 4, 3, 2, 5];

  return (
    <main>
      <SwapAnimation str={str} swapOrder={swapOrder} />
      <p className="author"><br />{formattedDate}</p>
      <Abstract />
    </main>
  )
}