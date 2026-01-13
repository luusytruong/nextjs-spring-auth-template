"use client";

import { cn } from "@/utils";
import React, { ComponentPropsWithoutRef } from "react";

export interface FormHeadProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  // props types here
}

export interface FormFooterProps extends ComponentPropsWithoutRef<"div"> {
  // props types here
}

export interface FormProps extends ComponentPropsWithoutRef<"form"> {
  // props types here
  padding?: "sm" | "md" | "lg";
}

function FormHead({ title, children, ...props }: FormHeadProps) {
  return (
    <div
      {...props}
      className={cn("flex items-center justify-center", props.className)}
    >
      {title && <h4 className="text-xl text-center font-medium">{title}</h4>}
      {children}
    </div>
  );
}

function FormFooter({ children, ...props }: FormFooterProps) {
  return (
    <div
      {...props}
      className={cn("flex items-center justify-center", props.className)}
    >
      {children}
    </div>
  );
}

function FormRoot({ padding = "sm", ...props }: FormProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <form
      {...props}
      className={cn(
        "flex flex-col items-stretch gap-4",
        paddings[padding],
        props.className
      )}
    >
      {props.children}
    </form>
  );
}

const Form = Object.assign(FormRoot, {
  Head: FormHead,
  Footer: FormFooter,
});

export default Form;
