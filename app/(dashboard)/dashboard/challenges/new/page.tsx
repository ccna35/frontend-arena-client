import { NewChallengeForm } from "@/components/Dashboard/Challenges/NewChallenge";
import Image from "next/image";
import { useState } from "react";

const NewChallenge = () => {
  return (
    <section className="p-8">
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Add a new challenge</h2>
      </div>
      <NewChallengeForm />
    </section>
  );
};

export default NewChallenge;
