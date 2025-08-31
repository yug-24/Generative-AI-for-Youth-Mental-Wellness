import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition-colors";
const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-sky-300 text-gray-800 hover:bg-sky-400",
  secondary: "bg-emerald-200 text-gray-800 hover:bg-emerald-300",
  outline: "border text-gray-800 hover:bg-gray-100",
};

export default forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
});
