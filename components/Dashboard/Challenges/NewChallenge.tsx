"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Delete, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ChallengeService } from "@/services/ChallengeService";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  //   challenge_title: z.string().trim().min(3).max(100),
  //   brief_description: z.string().trim().min(10).max(100),
  //   challenge_description: z.string().trim().min(10).max(500),
  //   extra_tips: z.string().trim().min(10).max(500),
  //   challenge_languages: z.string().trim().min(1),
  //   difficulty_level: z.string().trim().min(1),
  //   figma: z
  //     .string()
  //     .trim()
  //     .url()
  //     .min(10)
  //     .max(150)
  //     .regex(new RegExp(/^https:\/\/www\.figma\.com\/file\//)),
  featured: z
    .instanceof(File)
    .refine((file) => {
      console.log(file);

      return file.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  desktop: z
    .instanceof(File)
    .refine((file) => file.size, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

type ChallengeImages = {
  featured: null | File;
  desktop: null | File;
};

type NewChallengeFormProps = {
  images: ChallengeImages;
  setImages: Dispatch<SetStateAction<ChallengeImages>>;
};

export function NewChallengeForm() {
  const queryClient = useQueryClient();

  const [images, setImages] = useState<{
    featured: File | null;
    desktop: File | null;
  }>({
    featured: null,
    desktop: null,
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      featured: new File([], ""),
      desktop: new File([], ""),
    },
  });

  const { toast } = useToast();

  const { mutateAsync: createChallenge, isPending } = useMutation({
    mutationFn: ChallengeService.createChallenge,
    onSuccess: () => {
      toast({
        description: "Challenge was created successfully.",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["challenges"] });
    },
    onError(error) {
      console.log(error);
      toast({
        description: error.response.data,
        variant: "destructive",
      });
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // createChallenge(values);

    console.log(images);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-slate-300 rounded-lg p-8 flex flex-col gap-8 w-full md:w-96"
      >
        <FormField
          control={form.control}
          name="challenge_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Challenge title goes here"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brief_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Brief description goes here"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="challenge_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Challenge description goes here"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="figma"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Figma</FormLabel>
              <FormControl>
                <Input
                  placeholder="Figma link goes here"
                  {...field}
                  type="url"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="challenge_languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge Languages</FormLabel>
              <FormControl>
                <Input
                  placeholder="Challenge Languages go here"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="difficulty_level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Difficulty Level</FormLabel>
              <FormControl>
                <Input
                  placeholder="Difficulty Level go here"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="extra_tips"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Extra Tips</FormLabel>
              <FormControl>
                <Input
                  placeholder="Extra Tips go here"
                  {...field}
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured image</FormLabel>
              <FormControl>
                {/* <Input
                  placeholder="Choose a featured image"
                  {...field}
                  type="file"
                  onChange={(e) => {
                    if (e.target.files != null) {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      setImages({
                        ...images,
                        featured: e.target.files[0],
                      });
                    }
                  }}
                /> */}
                <input type="file" name="" id="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {images.featured && (
          <div className="flex gap-4">
            <Image
              src={URL.createObjectURL(images.featured)}
              width={100}
              height={100}
              alt="Featured image"
              className="rounded-md"
            />
            <Button
              //   variant={"destructive"}
              onClick={() => {
                form.resetField("featured");
                setImages({ ...images, featured: null });
              }}
            >
              <Delete />
            </Button>
          </div>
        )}

        <FormField
          control={form.control}
          name="desktop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desktop image</FormLabel>
              <FormControl>
                <Input
                  placeholder="Choose a desktop image"
                  {...field}
                  type="file"
                  onChange={(e) => {
                    if (e.target.files != null) {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      setImages({
                        ...images,
                        desktop: e.target.files[0],
                      });
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {images.desktop && (
          <div className="flex gap-4">
            <Image
              src={URL.createObjectURL(images.desktop)}
              width={100}
              height={100}
              alt="Featured image"
              className="rounded-md"
            />
            <Button
              //   variant={"destructive"}
              onClick={() => {
                form.resetField("desktop");
                setImages({ ...images, desktop: null });
              }}
            >
              <Delete />
            </Button>
          </div>
        )}

        <Button
          type="submit"
          className="bg-accent disabled:bg-indigo-950"
          disabled={isPending}
        >
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
