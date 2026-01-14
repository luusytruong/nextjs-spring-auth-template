import Register from "@/components/pages/register";
import { Suspense } from "react";

interface RegisterPageProps {
  // props types here
}

export default function RegisterPage({}: RegisterPageProps) {
  return (
    <Suspense>
      <Register />
    </Suspense>
  );
}
