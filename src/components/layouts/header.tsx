"use client";

import Image from "next/image";
import ButtonLink from "../ui/button-link";
import { useUserStore } from "@/store/user.store";
import { FullUser } from "../ui/types";

interface HeaderProps {
  user?: FullUser;
}

export default function Header({ user }: HeaderProps) {
  const userStore = useUserStore((s) => s.user);
  const currentUser = user || userStore;

  return (
    <header className="sticky top-0 z-10 border-b border-auto p-4 bg-background">
      <div className="flex items-center justify-start gap-4">
        <ButtonLink href="/">
          <Image
            src="/assets/vercel.svg"
            alt="Logo"
            priority
            width={32}
            height={32}
            className="h-8 w-8 invert dark:invert-0"
          />
        </ButtonLink>
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/profile">Profile</ButtonLink>
        <div className="ml-auto" />
        {currentUser ? (
          <ButtonLink href="/profile">{currentUser.email}</ButtonLink>
        ) : (
          <>
            <ButtonLink href="/login">Login</ButtonLink>
            <ButtonLink href="/register">Register</ButtonLink>
          </>
        )}
      </div>
    </header>
  );
}
