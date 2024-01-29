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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const MAX_FILE_SIZE = 1024 * 1024 * 0.2; // 0.2MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const languages = [
  {
    id: "1",
    label: "HTML",
  },
  {
    id: "2",
    label: "CSS",
  },
  {
    id: "3",
    label: "JS",
  },
] as const;

const formSchema = z.object({
  challenge_title: z.string().trim().min(3).max(100),
  brief_description: z.string().trim().min(10).max(100),
  challenge_description: z.string().trim().min(10).max(500),
  extra_tips: z.string().trim().min(10).max(500),
  challenge_languages: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  difficulty_level: z
    .string()
    .min(1)
    .refine((value) => value.length === 1, "Can't enter more than one number"),
  figma: z
    .string()
    .trim()
    .url()
    .min(10)
    .max(150)
    .regex(new RegExp(/^https:\/\/www\.figma\.com\/file\//)),
  featured_image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Each file size should be less than 0.2MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only these types are allowed .jpg, .jpeg, .png and .webp"
    ),
  desktop_image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Each file size should be less than 0.2MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only these types are allowed .jpg, .jpeg, .png and .webp"
    ),
  tablet_image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Each file size should be less than 0.2MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only these types are allowed .jpg, .jpeg, .png and .webp"
    )
    .optional(),
  smartphone_image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Each file size should be less than 0.2MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only these types are allowed .jpg, .jpeg, .png and .webp"
    )
    .optional(),
});

export function NewChallengeForm() {
  const queryClient = useQueryClient();

  const [images, setImages] = useState<{
    featured: File | null;
    desktop: File | null;
    tablet: File | null;
    smartphone: File | null;
  }>({
    featured: null,
    desktop: null,
    tablet: null,
    smartphone: null,
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      challenge_title: "",
      brief_description: "",
      challenge_description: "",
      challenge_languages: ["1", "2"],
      difficulty_level: "",
      extra_tips: "",
      figma: "",
      featured_image: new File([], ""),
      desktop_image: new File([], ""),
      // tablet_image: new File([], ""),
      // smartphone_image: new File([], ""),
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
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    formData.append("challenge_title", values.challenge_title);
    formData.append("brief_description", values.brief_description);
    formData.append("challenge_description", values.challenge_description);
    formData.append("challenge_languages", values.challenge_languages.join(""));
    formData.append("difficulty_level", values.difficulty_level.toString());
    formData.append("extra_tips", values.extra_tips);
    formData.append("figma", values.figma);
    formData.append("featured", values.featured_image);
    formData.append("desktop", values.desktop_image);

    if (values.tablet_image) formData.append("tablet", values.tablet_image);
    if (values.smartphone_image)
      formData.append("mobile", values.smartphone_image);

    createChallenge(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-slate-300 rounded-lg p-8 grid grid-cols-2 gap-8 w-full"
      >
        <FormField
          control={form.control}
          name="challenge_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge Title</FormLabel>
              <FormControl>
                <Input placeholder="Challenge Title" type="text" {...field} />
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
                <Textarea
                  placeholder="Brief Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="challenge_languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Challenge Languages</FormLabel>
              <FormControl>
                <Input placeholder="Languages" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="challenge_languages"
          render={() => (
            <FormItem>
              <FormLabel>Challenge Languages</FormLabel>
              {languages.map(({ id, label }) => (
                <FormField
                  key={id}
                  control={form.control}
                  name="challenge_languages"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, id])
                                : field.onChange(
                                    field.value?.filter((value) => value !== id)
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{label}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
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
                <Textarea
                  placeholder="Challenge Description"
                  className="resize-none"
                  {...field}
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Easy</SelectItem>
                  <SelectItem value="2">Medium</SelectItem>
                  <SelectItem value="3">Hard</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="figma"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Figma Link</FormLabel>
              <FormControl>
                <Input placeholder="Figma Link" type="text" {...field} />
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
                <Textarea
                  placeholder="Extra Tips"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="featured_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Featured Image</FormLabel>
                <FormControl>
                  <Input
                    accept=".jpg, .jpeg, .png, .svg"
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      setImages({
                        ...images,
                        featured: e.target.files ? e.target.files[0] : null,
                      });
                    }}
                  />
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
              <button
                onClick={() => {
                  form.resetField("featured_image");
                  setImages({ ...images, featured: null });
                }}
              >
                <Delete />
              </button>
              <p>
                <span className="mr-2">Size:</span>
                {(images.featured.size / 1024 ** 2).toPrecision(3)}
                MB
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="desktop_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desktop Image</FormLabel>
                <FormControl>
                  <Input
                    accept=".jpg, .jpeg, .png, .svg"
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      setImages({
                        ...images,
                        desktop: e.target.files ? e.target.files[0] : null,
                      });
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
              <button
                onClick={() => {
                  form.resetField("desktop_image");
                  setImages({ ...images, desktop: null });
                }}
              >
                <Delete />
              </button>
              <p>
                <span className="mr-2">Size:</span>
                {(images.desktop.size / 1024 ** 2).toPrecision(3)}
                MB
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="tablet_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tablet Image</FormLabel>
                <FormControl>
                  <Input
                    accept=".jpg, .jpeg, .png, .svg"
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      setImages({
                        ...images,
                        tablet: e.target.files ? e.target.files[0] : null,
                      });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {images.tablet && (
            <div className="flex gap-4">
              <Image
                src={URL.createObjectURL(images.tablet)}
                width={100}
                height={100}
                alt="Featured image"
                className="rounded-md"
              />
              <button
                onClick={() => {
                  form.resetField("tablet_image");
                  setImages({ ...images, tablet: null });
                }}
              >
                <Delete />
              </button>
              <p>
                <span className="mr-2">Size:</span>
                {(images.tablet.size / 1024 ** 2).toPrecision(3)}
                MB
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="smartphone_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Smartphone Image</FormLabel>
                <FormControl>
                  <Input
                    accept=".jpg, .jpeg, .png, .svg"
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files ? e.target.files[0] : null);
                      setImages({
                        ...images,
                        smartphone: e.target.files ? e.target.files[0] : null,
                      });
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {images.smartphone && (
            <div className="flex gap-4">
              <Image
                src={URL.createObjectURL(images.smartphone)}
                width={100}
                height={100}
                alt="Featured image"
                className="rounded-md"
              />
              <button
                onClick={() => {
                  form.resetField("smartphone_image");
                  setImages({ ...images, smartphone: null });
                }}
              >
                <Delete />
              </button>
              <p>
                <span className="mr-2">Size:</span>
                {(images.smartphone.size / 1024 ** 2).toPrecision(3)}
                MB
              </p>
            </div>
          )}
        </div>

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
