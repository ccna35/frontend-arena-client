import { NewChallengeForm } from "@/components/Dashboard/Challenges/NewChallenge";
import Image from "next/image";
import { useState } from "react";

const Challenges = () => {
  return (
    <section className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Welcome to your dashboard</h1>
        <h2 className="text-xl font-semibold">
          Here you will see your stats, latest challenges and solutions
        </h2>
        <p className="mt-4 text-slate-500">
          Still working on it, please bear with us...
        </p>
      </div>
      <NewChallengeForm />
    </section>
  );
};

export default Challenges;
