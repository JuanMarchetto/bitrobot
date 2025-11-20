import { MainContentSection } from "./sections/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection";

export const DashboardFull = () => {
  return (
    <div
      className="bg-[#fdfdfd] w-full min-h-screen flex justify-center p-4 lg:p-6"
      data-model-id="1:892"
    >
      <div className="relative w-full max-w-[1280px] min-h-screen lg:min-h-[1456px] flex justify-center">
        <SidebarSection />
        <header className="inline-flex h-[34px] items-center justify-center gap-3 px-3 py-1 absolute top-4 lg:top-6 right-4 bg-[#fdfdfd] rounded-lg border border-solid border-[#eeecfe] shadow-[0px_2px_8px_#00000012]">
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
        </header>

        <MainContentSection />
      </div>
    </div>
  );
};
