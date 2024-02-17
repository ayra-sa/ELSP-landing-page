import * as React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "large"
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size,
  children,
  ...props
}) => {
  const buttonClass = cn(
    "rounded-full transition duration-200 font-semibold text-xs px-3 py-2 lg:px-5",
    variant === "primary" && "bg-primary text-white hover:bg-primary/70",
    variant === "secondary" && "border border-[#FEB88C] bg-white text-primary hover:bg-white/90",
    size === "sm" && "px-7 py-2 text-md",
    size === "large" && "w-[70%] md:w-[50%] lg:w-[40%] py-3 text-sm",
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;