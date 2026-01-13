"use client";

import FormAuthLayout from "../layouts/form-auth-layout";
import Input from "../ui/input";
import { Lock, Mail, User } from "lucide-react";

interface RegisterProps {
  // props types here
}

export default function Register({}: RegisterProps) {
  return (
    <FormAuthLayout
      title="Đăng ký"
      isLogin={false}
      otherMethod={false}
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <Input type="text" icon={User} label="Họ và tên" required />
      <Input type="email" icon={Mail} label="Email" required />
      <Input type="password" icon={Lock} label="Mật khẩu" required />
      <Input type="password" icon={Lock} label="Xác nhận mật khẩu" required />
    </FormAuthLayout>
  );
}
