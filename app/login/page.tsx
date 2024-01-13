import { LoginForm } from "@/components/Login Page/Form";

export default function Login() {
  return (
    <main className="py-24">
      <div className="container flex flex-col items-center justify-between ">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h1 className="text-3xl font-semibold text-center">
            Log in to your account
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
