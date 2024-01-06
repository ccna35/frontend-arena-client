import { RegisterForm } from "@/components/Register Page/Form";
import Image from "next/image";

export default function Team() {
  return (
    <main className="py-24">
      <div className="container flex flex-col items-center justify-between ">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-3xl font-semibold text-center">
            Sign up for a new account
          </h1>
          <h2 className="text-xl font-normal text-slate-600 md:max-w-80 text-center">
            Create a new account and start practicing your frontend skills with
            our challenges
          </h2>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}
