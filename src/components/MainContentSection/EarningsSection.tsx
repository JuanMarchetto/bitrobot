import { earningsCards } from "../../constants";
import { styles, typography } from "../../utils/classNames";
import { Button } from "../UI/Button";

export const EarningsSection = () => {
  return (
    <div className="flex flex-col items-start gap-3 lg:gap-4 relative w-full xl:w-[456px] min-w-0 max-w-full">
          <div className="flex w-full h-auto sm:h-[154px] lg:h-[154px] items-stretch gap-3 lg:gap-4 relative flex-col sm:flex-row min-w-0">
            {earningsCards.map((card, index) => (
              <article
                key={index}
                className={`flex flex-col w-full sm:w-[220px] items-start justify-between pt-3 lg:pt-4 pb-4 lg:pb-6 px-3 lg:px-4 relative ${styles.card}`}
              >
                <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-2 relative flex-[0_0_auto]">
                    <span className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${typography.captionMedium} text-right`}>
                      {card.label}
                    </span>
                  </div>

                  <img
                    className="relative w-6 h-6"
                    alt="Points"
                    src={card.icon}
                  />
                </header>

                <div className="flex flex-col items-start justify-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-baseline gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] [font-family:'Aeonik-Medium',Helvetica] font-medium text-[#5d4bff] text-[32px] tracking-[-0.32px] whitespace-nowrap relative flex items-center justify-center leading-[normal]">
                      {card.value}
                    </span>

                    <span className="relative flex items-center justify-center w-fit [font-family:'Aeonik-Medium',Helvetica] font-medium text-[#5d4bff] text-base tracking-[-0.16px] leading-[normal] whitespace-nowrap">
                      {card.unit}
                    </span>
                  </div>

                  <button className="inline-flex items-end gap-0.5 relative flex-[0_0_auto] group">
                    <span className={`relative flex items-center justify-center w-fit mt-[-1.00px] ${typography.labelSmall} text-right`}>
                      Breakdown
                    </span>

                    <img
                      className="w-3.5 h-3.5 relative aspect-[1] transition-transform duration-300 ease-in-out group-hover:translate-x-4"
                      alt="Chevron right"
                      src="/assets/img/chevron-right-2.svg"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className={`flex flex-col sm:flex-row items-center justify-center gap-3 px-3 lg:px-4 py-3 lg:py-4 relative self-stretch w-full min-w-0 h-[92px] lg:h-[92px] ${styles.cardPurple}`}>
            <div className="flex-col items-start gap-1 flex-1 min-w-0 grow flex justify-center relative text-center sm:text-left">
              <h3 className={`relative flex items-center justify-center self-stretch mt-[-1.00px] ${typography.labelMedium}`}>
                Bonuses available!
              </h3>

              <p className={`relative flex items-center justify-center self-stretch mt-[-1.00px] ${typography.paragraphMedium}`}>
                The more you participate, the more you earn.
              </p>
            </div>

            <Button>SEE OPPORTUNITIES</Button>
          </aside>
    </div>
  );
};

