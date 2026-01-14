"use client";

import { ButtonIconProps } from "@/components/ui/types";
import { cn } from "@/utils";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

interface ButtonLinkProps extends ButtonIconProps, ComponentPropsWithRef<"a"> {}

export default function ButtonLink({
  icon: Icon,
  iconProps,
  title,
  titleProps,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      href={props.href || ""}
      className={cn("flex items-center gap-2", props.className)}
    >
      {Icon && <Icon {...iconProps} strokeWidth={1.5} size={20} />}
      {title && <span {...titleProps}>{title}</span>}
      {props.children}
    </Link>
  );
}
