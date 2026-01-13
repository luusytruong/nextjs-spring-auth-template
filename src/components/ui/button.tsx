"use client";

import { motion } from "framer-motion";
import React, { ComponentPropsWithoutRef } from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/utils";
import { ButtonIconProps } from "@/types";

interface ButtonProps
  extends ButtonIconProps,
    ComponentPropsWithoutRef<"button"> {}

export default function Button({
  icon: Icon,
  iconProps,
  title,
  titleProps,
  variant = "default",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-foreground text-background rounded-full",
    outline: "border border-auto rounded-lg",
    none: "",
  };

  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-2",
        variants[variant],
        props.className
      )}
    >
      {Icon && <Icon {...iconProps} strokeWidth={1.5} size={20} />}
      {title && <span {...titleProps}>{title}</span>}
      {props.children}
    </button>
  );
}
