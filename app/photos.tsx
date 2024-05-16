import Image from "next/image";

export default function Photos() {
    return (
        <div>
            <h2 id="photo-gallery">I&apos;m not a photographer...</h2>
            <p><b>...but,</b> here are some cool pictures anyways.</p>
            <Image
                src="/bachalpsee.jpg"
                width={700}
                height={700}
                alt="Bachalpsee"
                className="mt-4"
            />
            <Image
                src="/trecime.jpg"
                width={700}
                height={700}
                alt="Tre Cime di Lavaredo"
                className="mt-4"
            />
            <Image
                src="/baker.jpg"
                width={700}
                height={700}
                alt="Mt. Baker"
                className="mt-4"
            />
            <Image
                src="/frog.jpg"
                width={700}
                height={700}
                alt="frog"
                className="mt-4"
            />
        </div>
    )
}
