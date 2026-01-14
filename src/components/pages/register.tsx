"use client";

import { ChangeEvent, useState } from "react";
import FormAuthLayout from "../layouts/form-auth-layout";
import Input from "../ui/input";
import { Lock, Mail, User } from "lucide-react";
import { RegisterRequest } from "../ui/types";
import { toast } from "sonner";
import { useUserStore } from "@/store/user.store";
import { useRouter, useSearchParams } from "next/navigation";

interface RegisterProps {
  // props types here
}

export default function Register({}: RegisterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect");
  const register = useUserStore((s) => s.register);
  const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async () => {
    if (!isValid()) return;
    await register(registerRequest, () => {
      router.push(redirectUrl || "/profile");
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValid = () => {
    const errors = [];
    if (registerRequest.password !== registerRequest.password_confirmation) {
      errors.push("Mật khẩu không khớp");
    }
    if (registerRequest.password.length < 6) {
      errors.push("Mật khẩu phải có ít nhất 6 ký tự");
    }
    if (registerRequest.full_name.length < 2) {
      errors.push("Họ và tên phải có ít nhất 2 ký tự");
    }

    errors.forEach((err) => toast.error(err));
    return errors.length === 0;
  };

  return (
    <FormAuthLayout
      title="Đăng ký"
      isLogin={false}
      otherMethod={false}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        icon={User}
        label="Họ và tên"
        required
        name="full_name"
        onChange={handleChange}
      />
      <Input
        type="email"
        icon={Mail}
        label="Email"
        required
        name="email"
        onChange={handleChange}
      />
      <Input
        type="password"
        icon={Lock}
        label="Mật khẩu"
        required
        name="password"
        onChange={handleChange}
      />
      <Input
        type="password"
        icon={Lock}
        label="Xác nhận mật khẩu"
        required
        name="password_confirmation"
        onChange={handleChange}
      />
    </FormAuthLayout>
  );
}
