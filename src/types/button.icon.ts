import { LucideIcon, LucideProps } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export interface ButtonIconProps {
  icon?: LucideIcon;
  iconProps?: LucideProps;
  title?: string;
  titleProps?: ComponentPropsWithoutRef<"span">;
  variant?: "default" | "outline" | "none";
}
