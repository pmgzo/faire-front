import { AuthForm } from "./auth-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <AuthForm />
    </main>
  );
}
