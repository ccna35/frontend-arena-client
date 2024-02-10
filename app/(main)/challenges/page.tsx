"use client";

import ChallengeCard from "@/components/Challenges/Card";
import { ChallengeService } from "@/services/ChallengeService";
import { useQuery } from "@tanstack/react-query";

export default function Challenges() {
  const { data, isError, error, isSuccess } = useQuery({
    queryKey: ["challenges"],
    queryFn: ChallengeService.getAllChallenges,
  });

  if (isSuccess) {
    console.log(data);
  }
  if (isError) {
    console.log(error);
  }

  return (
    <main className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {data?.map((challenge) => {
            return <ChallengeCard key={challenge.id} challenge={challenge} />;
          })}
        </div>
      </div>
    </main>
  );
}
