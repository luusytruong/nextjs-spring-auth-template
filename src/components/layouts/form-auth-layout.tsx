"use client";

import { FormEvent, ReactNode } from "react";
import Form, { FormProps } from "../ui/form";
import { cn } from "@/utils";
import Button from "../ui/button";
import ButtonLink from "../common/button-link";
import Image from "next/image";

interface FormAuthLayoutProps {
  title?: string;
  label?: string;
  isLogin?: boolean;
  otherMethod?: boolean;
  formProps?: FormProps;
  children?: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> | void;
}

const FormAuthLayout = ({
  title,
  label,
  isLogin = true,
  otherMethod = true,
  formProps,
  children,
  onSubmit,
}: FormAuthLayoutProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="text-sm w-full h-full flex items-center justify-center p-4">
      <Form
        padding={formProps?.padding}
        className={cn("w-90", formProps?.className)}
        onSubmit={handleSubmit}
      >
        <Form.Head title={title} />
        {children}
        <Button
          type="submit"
          variant="default"
          className="w-full mt-4 rounded-lg"
        >
          {label || title}
        </Button>
        <div className="w-full h-px bg-black/15 dark:bg-white/15" />
        <Form.Footer className="flex-col items-stretch space-y-4">
          {otherMethod && (
            <>
              <Button type="button" variant="outline" className="w-full">
                <Image
                  src="/assets/google.svg"
                  alt="Google"
                  width={16}
                  height={16}
                />
                Google
              </Button>
              <Button type="button" variant="outline" className="w-full">
                <Image
                  src="/assets/meta.svg"
                  alt="Meta"
                  width={16}
                  height={16}
                  className="text-blue-400"
                />
                Facebook
              </Button>
            </>
          )}
          <div className="flex items-center justify-center gap-2">
            <span>{isLogin ? "Chưa có" : "Đã có"} tài khoản?</span>
            <ButtonLink
              href={isLogin ? "/auth/register" : "/auth/login"}
              className="text-primary underline"
            >
              {isLogin ? "Đăng ký" : "Đăng nhập"}
            </ButtonLink>
          </div>
        </Form.Footer>
      </Form>
    </div>
  );
};

export default FormAuthLayout;
