import { useState, useEffect } from "react";
import { DiscoverCarousel } from "../../../../components/MainContentSection/DiscoverCarousel";
import { EarningsSection } from "../../../../components/MainContentSection/EarningsSection";
import { Leaderboard } from "../../../../components/MainContentSection/Leaderboard";

export const MainContentSection = () => {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return typeof window !== "undefined" ? window.location.hash.slice(1) : "";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.slice(1));
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const shouldShowLeaderboard = currentHash !== "profile" && currentHash !== "dashboard";

  return (
    <main className="flex flex-col w-full lg:w-[960px] items-start gap-6 lg:gap-8 lg:absolute lg:top-[58px] lg:left-72 px-4 lg:px-0 mt-20 lg:mt-0">
      <DiscoverCarousel />
      <EarningsSection />
      {shouldShowLeaderboard && <Leaderboard />}
    </main>
  );
};
