import { cn } from "@/lib/util";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    { className, children, onClick, disabled, type = "button", ...props },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-1 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
