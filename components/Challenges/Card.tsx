import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Challenge } from "@/types/types";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type ChallengeCardProps = {
  challenge: Omit<Challenge, "id">;
};

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const {
    brief_description,
    challenge_description,
    challenge_images,
    challenge_title,
    createdAt,
    extra_tips,
    featured_image,
    figma,
    languages,
    levelName,
  } = challenge;
  console.log(featured_image);

  return (
    <Card className="rounded-md overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-48 relative">
          <Image
            src={featured_image}
            alt={challenge_title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-xl font-medium">
            {challenge_title}
          </CardTitle>
          <CardDescription>{brief_description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Badge
          variant={
            levelName === "Easy"
              ? "easy"
              : levelName === "Medium"
              ? "medium"
              : "destructive"
          }
        >
          {levelName}
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-2">
        {languages != null &&
          languages.split(",").map((lang) => (
            <Badge key={lang} variant={"outline"}>
              {lang}
            </Badge>
          ))}
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
