"use client";

import { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, iconPosition = "right", ...props }, ref) => {
    const hasIcon = !!icon;

    return (
      <div className="relative">
        <input
          className={cn(
            "flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-colors",
            "placeholder:text-gray-400",
            "focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20",
            "hover:border-gray-400",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-400/20",
            hasIcon && iconPosition === "left" && "pl-10",
            hasIcon && iconPosition === "right" && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />

        {hasIcon && (
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none",
              iconPosition === "left" && "left-3",
              iconPosition === "right" && "right-3"
            )}
          >
            {icon}
          </div>
        )}

        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
