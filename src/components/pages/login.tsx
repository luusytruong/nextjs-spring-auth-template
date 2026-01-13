"use client";

import { useState } from "react";
import Input from "../ui/input";
import { Lock, Mail } from "lucide-react";
import FormAuthLayout from "../layouts/form-auth-layout";
import { LoginRequest } from "@/types";
import { handleApiResponse } from "@/utils/response";
import { api, userApi } from "@/lib/axios";
import { useRouter } from "next/navigation";

interface LoginProps {
  // props types here
}

export default function Login({}: LoginProps) {
  const router = useRouter();
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    handleApiResponse(userApi.login(loginRequest), {
      onSuccess: () => {
        router.replace("/profile");
      },
    });
  };

  return (
    <FormAuthLayout title="Đăng nhập" onSubmit={handleLogin}>
      <Input
        type="email"
        icon={Mail}
        label="Email"
        required
        value={loginRequest.email}
        onChange={(e) =>
          setLoginRequest({ ...loginRequest, email: e.target.value })
        }
      />
      <Input
        type="password"
        icon={Lock}
        label="Mật khẩu"
        required
        value={loginRequest.password}
        onChange={(e) =>
          setLoginRequest({ ...loginRequest, password: e.target.value })
        }
      />
    </FormAuthLayout>
  );
}
