import { mainNavItems, MainNavItem } from "../../constants";
import { styles, typography } from "../../utils/classNames";
import { cn } from "../../utils/classNames";

interface MainNavigationProps {
  currentHash: string;
}

export const MainNavigation = ({ currentHash }: MainNavigationProps) => {
  const hashMatchesItem = mainNavItems.some(
    (navItem: MainNavItem) => currentHash === navItem.id
  );

  return (
    <nav
      className="flex flex-col items-start px-4 py-0 relative self-stretch w-full flex-[0_0_auto]"
      aria-label="Primary navigation"
    >
      {mainNavItems.map((item: MainNavItem) => {
        const isActive =
          currentHash === item.id ||
          ((!currentHash || !hashMatchesItem) && item.id === "contribute");
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              styles.navLink,
              isActive ? "justify-between" : "gap-3"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <img
                className="relative w-5 h-5 aspect-[1]"
                alt=""
                src={item.icon}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "relative flex items-center justify-center w-fit",
                  typography.captionLarge,
                  isActive ? "text-[#5d4bff]" : "text-gray-2"
                )}
              >
                {item.label}
              </span>
            </div>
            {isActive && (
              <div
                className="relative w-2.5 h-2.5 bg-positive rounded-[5px] shadow-[0px_0px_5px_4px_#00c33a33]"
                aria-label="Active indicator"
              />
            )}
          </a>
        );
      })}
    </nav>
  );
};

