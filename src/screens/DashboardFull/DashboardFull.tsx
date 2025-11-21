import { MainContentSection } from "./sections/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection";
import { MobileHeader } from "../../components/Sidebar/MobileHeader";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const DashboardFull = () => {
  return (
    <div
      className="bg-[#fdfdfd] w-full flex justify-center p-4 lg:p-6 overflow-x-hidden"
      data-model-id="1:892"
    >
      <ErrorBoundary>
        <MobileHeader />
      </ErrorBoundary>
      <div className="relative w-full max-w-[1280px] min-h-screen flex justify-center overflow-hidden min-w-0 xl:pt-0 pt-[66px]">
        <ErrorBoundary>
          <SidebarSection />
        </ErrorBoundary>
        <header className="hidden xl:inline-flex h-[34px] items-center justify-center gap-3 px-3 py-1 absolute top-4 lg:top-6 xl:top-6 right-4 bg-[#fdfdfd] rounded-lg border border-solid border-[#eeecfe] shadow-[0px_2px_8px_#00000012] z-40">
        <button
          className="inline-flex items-center gap-3 relative flex-[0_0_auto] cursor-pointer"
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

          <img
            className="w-5 h-5 relative aspect-[1] flex-shrink-0"
            alt="Chevron down"
            src="/assets/img/chevron-down.svg"
          />
        </button>
        </header>

        <ErrorBoundary>
          <MainContentSection />
        </ErrorBoundary>
      </div>
    </div>
  );
};
