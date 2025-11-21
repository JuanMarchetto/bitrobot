import { ReactNode } from "react";
import { styles } from "../../utils/classNames";

interface SectionHeaderProps {
  label: string;
  className?: string;
}

export const SectionHeader = ({ label, className }: SectionHeaderProps) => {
  return (
    <div className={`${styles.sectionBadge} ${className || ""}`}>
      <span className={`${styles.sectionBadgeText} relative flex items-center justify-center w-fit mt-[-1.00px]`}>
        {label}
      </span>
    </div>
  );
};

