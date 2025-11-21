import { useState } from "react";
import { leaderboardData } from "../../constants";


const getUserMarginRight = (isCurrentUser: boolean, rank: number): string => {
  const defaultMargin = "mr-[-6.00px]";
  
  if (isCurrentUser) {
    return defaultMargin;
  }

  const rankMarginOverrides: Record<number, string> = {
    1: "mr-[-3.00px]",
    3: "mr-[-3.00px]",
    4: "mr-[-1.00px]",
    5: "mr-[-5.00px]",
    9: "mr-[-11.00px]",
  };

  if (rank in rankMarginOverrides) {
    return rankMarginOverrides[rank];
  }

  if (rank >= 6 && rank <= 8) {
    return defaultMargin;
  }

  return "";
};

export const Leaderboard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="flex flex-col w-full items-start relative flex-[0_0_auto] min-w-0 max-w-full">
      <header className="flex flex-col items-start gap-3 lg:gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#eeecfe] rounded-lg shadow-shadow-1">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
            LEADERBOARD
          </span>
        </div>

        <div className="flex flex-col items-start gap-3 lg:gap-4 px-2 lg:px-4 py-0 relative self-stretch w-full flex-[0_0_auto] overflow-x-auto">
          <div className="justify-between pt-0 pb-2 lg:pb-3 px-0 self-stretch w-full min-w-[600px] flex-[0_0_auto] flex items-center relative">
            <span className="relative flex items-center justify-center w-12 lg:w-8 mt-[-2.00px] font-label-small font-[number:var(--label-small-font-weight)] text-gray text-[10px] lg:text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
              Rank
            </span>

            <span className="justify-center w-[100px] lg:w-[122px] mt-[-2.00px] font-label-small font-[number:var(--label-small-font-weight)] text-gray text-[10px] lg:text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] flex items-center relative [font-style:var(--label-small-font-style)]">
              User
            </span>

            <span className="justify-center w-[100px] lg:w-[122px] mt-[-2.00px] font-label-small font-[number:var(--label-small-font-weight)] text-gray text-[10px] lg:text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] flex items-center relative [font-style:var(--label-small-font-style)]">
              Lifetime
            </span>

            <span className="justify-center w-[100px] lg:w-[122px] mt-[-2.00px] font-label-small font-[number:var(--label-small-font-weight)] text-gray text-[10px] lg:text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] flex items-center relative [font-style:var(--label-small-font-style)]">
              Epoch
            </span>

            <span className="justify-center w-[100px] lg:w-[122px] mt-[-2.00px] font-label-small font-[number:var(--label-small-font-weight)] text-gray text-[10px] lg:text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] flex items-center relative [font-style:var(--label-small-font-style)]">
              Referrals
            </span>
          </div>
        </div>
      </header>

      <div className="w-full max-w-full overflow-x-auto">
        <div className="min-w-[600px]">
          {leaderboardData.map((entry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex items-center justify-between px-2 lg:px-4 py-2 lg:py-3 relative self-stretch w-full flex-[0_0_auto] transition-colors duration-200 ${
                entry.isCurrentUser
                  ? "bg-[#eeecfe] border-b [border-bottom-style:solid]"
                  : hoveredIndex === index
                    ? "bg-[#eeecfe66] border-b [border-bottom-style:solid] border-[#eeecfe]"
                    : "border-b [border-bottom-style:solid] border-[#eeecfe]"
              }`}
            >
              <span
                className={`${
                  entry.isCurrentUser
                    ? "w-12 lg:w-8"
                    : "relative flex items-center justify-center w-12 lg:w-8"
                } text-sm lg:text-[length:var(--caption-large-font-size)] font-caption-large font-[number:var(--caption-large-font-weight)] ${
                  entry.isCurrentUser ? "text-[#5d4bff]" : "text-gray-2"
                } text-[length:var(--caption-large-font-size)] tracking-[var(--caption-large-letter-spacing)] ${
                  entry.isCurrentUser
                    ? "relative flex items-center justify-center"
                    : ""
                } leading-[var(--caption-large-line-height)] [font-style:var(--caption-large-font-style)]`}
              >
                {entry.rank}
              </span>

              <div className="flex w-[100px] lg:w-[122px] items-center gap-1.5 lg:gap-2 relative">
                <div
                  className="relative w-4 h-4 lg:w-5 lg:h-5 rounded-[999px] aspect-[1] bg-cover bg-[50%_50%] flex-shrink-0"
                  style={{ backgroundImage: `url(${entry.avatar})` }}
                />

                <span
                  className={`relative flex items-center justify-center w-fit text-[10px] lg:text-[length:var(--label-small-font-size)] ${getUserMarginRight(
                    entry.isCurrentUser,
                    entry.rank
                  )} font-label-small font-[number:var(--label-small-font-weight)] ${
                    entry.isCurrentUser ? "text-[#5d4bff]" : "text-gray-2"
                  } text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]`}
                >
                  {entry.user}
                </span>
              </div>

              <span
                className={`w-[100px] lg:w-[122px] text-[10px] lg:text-[length:var(--label-small-font-size)] font-label-small font-[number:var(--label-small-font-weight)] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] relative flex items-center justify-center [font-style:var(--label-small-font-style)] ${
                  entry.isCurrentUser ? "text-[#5d4bff]" : "text-gray-2"
                }`}
              >
                {entry.lifetimeEarning}
              </span>

              <span
                className={`w-[100px] lg:w-[122px] [font-family:'Aeonik-Medium',Helvetica] font-medium text-xs lg:text-sm tracking-[-0.56px] leading-[normal] relative flex items-center justify-center ${
                  entry.isCurrentUser ? "text-[#5d4bff]" : "text-gray-2"
                }`}
              >
                {entry.thisEpoch}
              </span>

              <span
                className={`w-[100px] lg:w-[122px] [font-family:'Aeonik-Medium',Helvetica] font-medium text-xs lg:text-sm tracking-[-0.56px] leading-[normal] relative flex items-center justify-center ${
                  entry.isCurrentUser ? "text-[#5d4bff]" : "text-gray-2"
                }`}
              >
                {entry.referrals}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

