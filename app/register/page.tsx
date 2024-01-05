import { RegisterForm } from "@/components/Register Page/Form";
import Image from "next/image";

export default function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-semibold">Sign up for a new account</h1>
      <h2 className="text-xl font-medium">
        Create a new account and start practicing your frontend skills with our
        challenges
      </h2>
      <RegisterForm />
    </main>
  );
}
