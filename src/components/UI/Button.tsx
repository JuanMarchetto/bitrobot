import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn, styles } from "../../utils/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const baseClasses = variant === "primary" 
    ? styles.primaryButton
    : "all-[unset] box-border inline-flex items-center justify-center gap-2 px-2 py-3 relative flex-shrink-0 rounded-lg border border-solid border-[#5d4bff] hover:bg-[#5d4bff] hover:text-white transition-colors";

  return (
    <button className={cn(baseClasses, className)} {...props}>
      {variant === "primary" ? (
        <span className={`${styles.primaryButtonText} relative flex items-center justify-center w-fit mt-[-1.00px]`}>
          {children}
        </span>
      ) : (
        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-small font-[number:var(--caption-small-font-weight)] text-[#5d4bff] hover:text-white text-[length:var(--caption-small-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
          {children}
        </span>
      )}
    </button>
  );
};

