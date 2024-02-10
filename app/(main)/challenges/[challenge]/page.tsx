"use client";

import { Badge } from "@/components/ui/badge";
import { ChallengeService } from "@/services/ChallengeService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ChallengePage() {
  const { challenge } = useParams();

  const { data, isError, error, isSuccess, isLoading } = useQuery({
    queryKey: ["challenge"],
    queryFn: () => ChallengeService.getOneChallenge(challenge as string),
  });

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    return (
      <main className="py-16">
        <div className="container">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data && (
            <>
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">
                  {data.challenge_title}
                </h2>
                <p>{data.challenge_description}</p>
                <p>{data.extra_tips}</p>
                <div className="flex gap-2">
                  {data.languages.split(",").map((lang) => (
                    <Badge key={lang} variant={"outline"}>
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-80 relative border border-gray-200 rounded-md overflow-hidden">
                  <Image
                    src={data.featured_image}
                    alt={data.challenge_title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
