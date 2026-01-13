import { ComponentPropsWithoutRef } from "react";

interface LayoutPageProps extends ComponentPropsWithoutRef<"div"> {
  // props types here
}

export default function LayoutPage({ children, ...props }: LayoutPageProps) {
  return <div className="flex flex-1">{children}</div>;
}
