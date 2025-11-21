import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const typography = {
  captionMedium: "font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]",
  
  captionLarge: "font-caption-large font-[number:var(--caption-large-font-weight)] text-[length:var(--caption-large-font-size)] tracking-[var(--caption-large-letter-spacing)] leading-[var(--caption-large-line-height)] whitespace-nowrap [font-style:var(--caption-large-font-style)]",
  
  captionSmall: "font-caption-small font-[number:var(--caption-small-font-weight)] text-[#fdfdfd] text-[length:var(--caption-small-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]",
  
  labelMedium: "font-label-medium font-[number:var(--label-medium-font-weight)] text-[#5d4bff] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]",
  
  labelSmall: "font-label-small font-[number:var(--label-small-font-weight)] text-[#5d4bff] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]",
  
  paragraphMedium: "font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#5d4bff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]",
  
  paragraphSmall: "font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-gray-2 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]",
  
  headingSmall: "font-heading-small font-[number:var(--heading-small-font-weight)] text-[#5d4bff] text-[length:var(--heading-small-font-size)] tracking-[var(--heading-small-letter-spacing)] leading-[var(--heading-small-line-height)] [font-style:var(--heading-small-font-style)]",
};

export const styles = {
  sectionBadge: "inline-flex items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#eeecfe] rounded-lg shadow-shadow-1",
  
  sectionBadgeText: typography.captionMedium,
  
  primaryButton: "all-[unset] box-border inline-flex items-center justify-center gap-2 px-2 py-3 relative flex-shrink-0 bg-[#5d4bff] rounded-lg hover:bg-[#4a3ae0] transition-colors",
  
  primaryButtonText: typography.captionSmall,
  
  card: "bg-gray-fill rounded-xl lg:rounded-2xl shadow-shadow",
  
  cardPurple: "bg-[#eeecfe] rounded-xl lg:rounded-2xl",
  
  navLink: "flex items-center px-1 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#eeecfe] no-underline hover:bg-[#f9f9f9] transition-colors",
};

