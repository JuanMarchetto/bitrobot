import { DiscoverCarousel } from "../../../../components/MainContentSection/DiscoverCarousel";
import { EarningsSection } from "../../../../components/MainContentSection/EarningsSection";
import { EarningsHistory } from "../../../../components/MainContentSection/EarningsHistory";
import { Leaderboard } from "../../../../components/MainContentSection/Leaderboard";
import { useHashNavigation } from "../../../../hooks/useHashNavigation";

export const MainContentSection = () => {
  const currentHash = useHashNavigation();

  const shouldShowLeaderboard = currentHash !== "profile" && currentHash !== "dashboard";

  return (
    <main className="flex flex-col w-full lg:w-[960px] items-start gap-6 lg:gap-8 lg:absolute lg:top-[58px] lg:left-0 xl:left-[264px] px-4 lg:px-0 mt-20 lg:mt-0 xl:mt-0 max-w-full min-w-0">
      <DiscoverCarousel />
      
      <section className="flex flex-col items-start gap-4 lg:gap-6 relative self-stretch w-full flex-[0_0_auto] min-w-0 max-w-full">
        <header className="flex items-start gap-6 lg:gap-10 relative self-stretch w-full flex-[0_0_auto] min-w-0">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#eeecfe] rounded-lg shadow-shadow-1">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
              EARNINGS
            </span>
          </div>
        </header>

        <div className="hidden xl:flex gap-3 lg:gap-4 relative self-stretch w-full flex-row items-stretch min-w-0 max-w-full">
          <EarningsSection />
          <EarningsHistory />
        </div>

        <div className="flex xl:hidden flex-col items-start gap-3 lg:gap-4 relative self-stretch w-full min-w-0 max-w-full">
          <EarningsSection />
          <EarningsHistory />
        </div>
      </section>

      {shouldShowLeaderboard && (
        <div className="w-full">
          <Leaderboard />
        </div>
      )}
    </main>
  );
};
