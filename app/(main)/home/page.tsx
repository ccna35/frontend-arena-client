import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-semibold">Welcome to your dashboard</h1>
        <h2 className="text-xl font-semibold">
          Here you will see your stats, latest challenges and solutions
        </h2>
        <p className="mt-4 text-slate-500">
          Still working on it, please bear with us...
        </p>
      </div>
    </main>
  );
}
