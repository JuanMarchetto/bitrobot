import { mainNavItems, MainNavItem } from "../../constants";

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
            className={`flex items-center ${
              isActive ? "justify-between" : "gap-3"
            } px-1 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#eeecfe] no-underline hover:bg-[#f9f9f9] transition-colors`}
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
                className={`relative flex items-center justify-center w-fit font-caption-large font-[number:var(--caption-large-font-weight)] text-[length:var(--caption-large-font-size)] tracking-[var(--caption-large-letter-spacing)] leading-[var(--caption-large-line-height)] whitespace-nowrap [font-style:var(--caption-large-font-style)] ${
                  isActive ? "text-[#5d4bff]" : "text-gray-2"
                }`}
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

