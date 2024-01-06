"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "First name must be at least 2 characters.",
      })
      .max(20, {
        message: "First name must be less than or equal to 20 characters.",
      })
      .trim(),
    lastName: z
      .string()
      .min(2, {
        message: "Last name must be at least 2 characters.",
      })
      .max(20, {
        message: "Last name must be less than or equal to 20 characters.",
      })
      .trim(),
    username: z
      .string()
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Only letters, numbers and underscores are allowed!",
      })
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(20, {
        message: "Username must be less than or equal to 20 characters.",
      })
      .trim(),
    email: z
      .string()
      .min(2, {
        message: "Email is required",
      })
      .max(50, {
        message: "Email must be less than or equal to 50 characters.",
      })
      .email({ message: "Email must be valid" })
      .trim(),
    password: z
      .string()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
        message:
          "Password should have at least one uppercase letter, one lowercase and one special character",
      })
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(20, {
        message: "Password must be less than or equal to 20 characters.",
      }),
    confirmPassword: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(20, {
        message: "Password must be less than or equal to 20 characters.",
      }),
  })
  .refine(
    ({ password, confirmPassword, username }) =>
      password === confirmPassword && !username.includes(" "),
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

export function RegisterForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-slate-300 rounded-lg p-8 grid sm:grid-cols-2 gap-8 w-full md:w-[40rem]"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@example.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your password here"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password again"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-accent">
          Sign up
        </Button>
      </form>
    </Form>
  );
}
