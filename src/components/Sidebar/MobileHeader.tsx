import { useState, useEffect } from "react";
import { MainNavigation } from "./MainNavigation";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return typeof window !== "undefined" ? window.location.hash.slice(1) : "";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.slice(1));
      setIsMenuOpen(false); // Close menu when navigating
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-[#fdfdfd] border-b border-solid border-[#eeecfe]">
      <div className="flex items-center px-4 py-3">
        <div className="flex items-center gap-1 flex-shrink-0">
          <img
            className="relative w-[50px] h-[50px] aspect-[1]"
            alt="BitRobot Icon"
            src="/assets/img/icon.svg"
          />
          <div className="inline-flex flex-col items-center justify-center gap-2 px-3 py-0 bg-white rounded-lg border border-solid border-stroke shadow-[0px_2px_8px_#00000012]">
            <div className="relative w-[85.09px] h-[18px]">
              <img
                className="absolute w-[98.97%] h-[99.27%] top-0 left-0"
                alt="BitRobot"
                src="/assets/img/vector.svg"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-[#f9f9f9] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <svg
              className="w-6 h-6 text-gray-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="flex-shrink-0 inline-flex h-[34px] items-center justify-center gap-3 px-3 py-1 bg-[#fdfdfd] rounded-lg border border-solid border-[#eeecfe] shadow-[0px_2px_8px_#00000012]">
          <button
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
            aria-label="User menu"
            type="button"
          >
            <img
              className="relative w-5 h-5 rounded-[999px] aspect-[1]"
              alt="User avatar"
              src="/assets/img/frame-6@2x.png"
            />
            <span className="relative flex items-center justify-center w-fit font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-gray-2 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
              username123
            </span>
          </button>
          <img
            className="w-5 h-5 relative aspect-[1]"
            alt="Chevron down"
            src="/assets/img/chevron-down.svg"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#fdfdfd] border-t border-solid border-[#eeecfe] shadow-lg max-h-[calc(100vh-66px)] overflow-y-auto">
          <div className="px-4 py-4">
            <MainNavigation currentHash={currentHash} />
          </div>
        </div>
      )}
    </div>
  );
};

