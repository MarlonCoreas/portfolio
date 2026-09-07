import type { ComponentPropsWithoutRef } from "react";
import ArrowIcon from "./ArrowIcon";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost" | "light";
  arrow?: boolean;
};

export default function ActionLink({ variant = "primary", arrow = false, className = "", children, ...props }: Props) {
  return (
    <a {...props} className={`button button-${variant}${className ? ` ${className}` : ""}`}>
      <span>{children}</span>
      {arrow && <span className="icon"><ArrowIcon /></span>}
    </a>
  );
}
