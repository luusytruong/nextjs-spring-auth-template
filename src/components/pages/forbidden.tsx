"use client";

import { Home, ShieldAlert } from "lucide-react";
import Image from "next/image";
import ButtonLink from "../ui/button-link";

export default function Forbidden() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <Image
        src="/assets/forbidden.gif"
        alt="Forbidden"
        loading="eager"
        width={400}
        height={400}
        className="max-w-sm w-full dark:invert dark:mix-blend-screen"
      />
      <ButtonLink
        href="/"
        icon={Home}
        title="Quay về trang chủ"
        className="focus-auto border border-auto px-3 py-2 rounded-lg"
      />
    </div>
  );
}
