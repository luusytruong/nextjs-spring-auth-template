"use client";

import { ButtonIconProps } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import NProgress from "nprogress";

interface ButtonLinkProps
  extends ButtonIconProps,
    ComponentPropsWithoutRef<"a"> {}

export default function ButtonLink({
  icon: Icon,
  iconProps,
  title,
  titleProps,
  ...props
}: ButtonLinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    if (props.href !== pathname) NProgress.start();
  };

  return (
    <Link
      {...props}
      href={props.href || ""}
      className={cn("flex items-center gap-2", props.className)}
      onClick={handleClick}
    >
      {Icon && <Icon {...iconProps} strokeWidth={1.5} size={20} />}
      {title && <span {...titleProps}>{title}</span>}
      {props.children}
    </Link>
  );
}
