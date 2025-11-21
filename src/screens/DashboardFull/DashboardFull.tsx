import { MainContentSection } from "./sections/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection";
import { MobileHeader } from "../../components/Sidebar/MobileHeader";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { UsernameHeader } from "../../components/UI/UsernameHeader";

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
          <UsernameHeader />
        </header>

        <ErrorBoundary>
          <MainContentSection />
        </ErrorBoundary>
      </div>
    </div>
  );
};
