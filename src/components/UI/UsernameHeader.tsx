import { typography } from "../../utils/classNames";
import { cn } from "../../utils/classNames";

interface UsernameHeaderProps {
  gap?: string;
  className?: string;
  includeChevron?: boolean;
}

export const UsernameHeader = ({ gap = "gap-3", className, includeChevron = true }: UsernameHeaderProps) => {
  return (
    <button
      className={cn("inline-flex items-center relative flex-[0_0_auto] cursor-pointer", gap, className)}
      aria-label="User menu"
      type="button"
    >
      <img
        className="relative w-5 h-5 rounded-[999px] aspect-[1]"
        alt="User avatar"
        src="/assets/img/frame-6@2x.png"
      />

      <span className={`relative flex items-center justify-center w-fit ${typography.paragraphSmall} whitespace-nowrap`}>
        username123
      </span>

      {includeChevron && (
        <img
          className="w-5 h-5 relative aspect-[1] flex-shrink-0"
          alt="Chevron down"
          src="/assets/img/chevron-down.svg"
        />
      )}
    </button>
  );
};

