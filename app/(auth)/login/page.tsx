import Login from "@/components/pages/login";
import { Suspense } from "react";

interface LoginPageProps {
  // props types here
}

export default function LoginPage({}: LoginPageProps) {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
