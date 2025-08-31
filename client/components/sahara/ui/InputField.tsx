import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default forwardRef<HTMLInputElement, Props>(function InputField({ label, className, id, ...props }, ref){
  const input = (
    <input
      id={id}
      ref={ref}
      className={cn("mt-1 w-full rounded-lg border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring", className)}
      {...props}
    />
  );
  if (!label) return input;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">{label}</label>
      {input}
    </div>
  );
});
