"use client";

import ChallengeCard from "@/components/Challenges/Card";
import { ProductService } from "@/services/ChallengeService";
import { useQuery } from "@tanstack/react-query";

export default function Challenges() {
  const { data, isError, error, isSuccess } = useQuery({
    queryKey: ["challenges"],
    queryFn: ProductService.getAllChallenges,
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
        <div className="grid grid-cols-4 gap-8">
          {data?.map(({ id, ...rest }) => {
            return <ChallengeCard key={id} challenge={rest} />;
          })}
        </div>
      </div>
    </main>
  );
}
