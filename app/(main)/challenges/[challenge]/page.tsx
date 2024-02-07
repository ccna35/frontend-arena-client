"use client";

import ChallengeCard from "@/components/Challenges/Card";
import { ChallengeService } from "@/services/ChallengeService";
import { useQuery } from "@tanstack/react-query";

export default function ChallengePage() {
  const { data, isError, error, isSuccess } = useQuery({
    queryKey: ["challenge"],
    queryFn: ChallengeService.getAllChallenges,
  });

  if (isError) {
    console.log(error);
  }

  return (
    <main className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
          {data?.map(({ id, ...rest }) => {
            return <ChallengeCard key={id} challenge={rest} />;
          })}
        </div>
      </div>
    </main>
  );
}
