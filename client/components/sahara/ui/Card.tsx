import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-white rounded-xl shadow-md p-6", className)}
      {...props}
    />
  );
}
