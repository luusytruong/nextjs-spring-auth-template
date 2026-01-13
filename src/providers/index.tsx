"use client";

import { ReactNode } from "react";
import TanstackProvider from "./tanstack-provider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <TanstackProvider>{children}</TanstackProvider>;
}
