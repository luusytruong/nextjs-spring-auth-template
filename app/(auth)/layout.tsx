"use client";

import { BaseUser, FullUser } from "@/components/ui/types";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { toast } from "sonner";

interface AuthLayoutProps {
  children: Readonly<ReactNode>;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();

  const handleCheckCookie = async () => {
    const cookie = await getCookie("user");
    const data = JSON.parse(cookie || "{state:null}");

    if (data.state?.user?.email) {
      toast.success("Bạn đã đăng nhập rồi!, đang chuyển hướng...");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  useEffect(() => {
    handleCheckCookie();
  }, []);
  return children;
}
