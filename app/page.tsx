import Image from "next/image";

export default function Home() {
  const currentDate = new Date();
  
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  return (
    <main>
      <p className="author">Steven He <br /> {formattedDate}</p>
    </main>
  )
}