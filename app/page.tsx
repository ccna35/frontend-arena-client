import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-8 py-16 pl-[75px]">
          <h1 className="text-7xl font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <h2 className="text-xl text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, at.
          </h2>
          <Button>Get Started</Button>
        </div>
        <div className="bg-hero-pattern bg-cover grid place-items-center">
          <Image
            alt="Parrot"
            src="https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg"
            width={400}
            height={400}
          />
        </div>
      </section>
    </main>
  );
}
