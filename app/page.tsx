// import Image from "next/image";
import SwapAnimation from "@/components/SwapAnimation";
import Abstract from "./abstract";
import Contents from "./contents";
import Contact from "./contact";
import MyWork from "./mywork";
import Dotfiles from "./dotfiles";
import Photos from "./photos";

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
      <header>
        <SwapAnimation str={str} swapOrder={swapOrder} />
        <p className="author"><br />{formattedDate}</p>
      </header>
      <Abstract />
      <Contents />
      <article>
        <Contact />
        <MyWork />
        <Dotfiles />
        <Photos />
      </article>
    </main>
  )
}