"use client";

import { cn } from "@/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import type { ButtonIconProps } from "@/types";

type InputElement = "input" | "textarea" | "select";

interface InputOwnProps
  extends Omit<ButtonIconProps, "title" | "titleProps" | "variant"> {
  label?: string;
  labelProps?: ComponentPropsWithoutRef<"label">;
  required?: boolean;
  children?: ReactNode;
  variant?: "default" | "underline";
}

type PolymorphicInputProps<T extends ElementType> = InputOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof InputOwnProps | "as"> & {
    as?: T;
  };

const Input = <T extends InputElement = "input">({
  as,
  label,
  labelProps,
  icon: Icon,
  iconProps,
  required,
  className,
  children,
  variant = "default",
  ...props
}: PolymorphicInputProps<T>) => {
  const Component = (as || "input") as ElementType;
  const variants = {
    default: "border px-3 py-2 rounded-lg",
    underline: "border-b py-2",
  };

  return (
    <div className="space-y-1">
      {label && (
        <label
          {...labelProps}
          className={cn("block text-sm", labelProps?.className)}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {Icon && (
          <Icon
            {...iconProps}
            strokeWidth={iconProps?.strokeWidth || 1.5}
            size={iconProps?.size || 16}
            className={cn(
              "absolute left-3 pointer-events-none",
              iconProps?.className
            )}
          />
        )}

        <Component
          {...(props as ComponentPropsWithoutRef<T>)}
          required={required}
          className={cn(
            "w-full text-base md:text-sm outline-none transition-all appearance-none",
            "border-auto",
            "disabled:cursor-not-allowed disabled:opacity-50",
            variants[variant],
            Icon && "pl-10",
            className
          )}
        >
          {children}
        </Component>
      </div>
    </div>
  );
};

export default Input;
