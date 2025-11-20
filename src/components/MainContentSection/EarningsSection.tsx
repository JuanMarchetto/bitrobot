import { earningsCards, chartData } from "../../constants";

export const EarningsSection = () => {
  return (
    <section className="flex flex-col items-start gap-4 lg:gap-6 relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex items-start gap-6 lg:gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#eeecfe] rounded-lg shadow-shadow-1">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
            EARNINGS
          </span>
        </div>
      </header>

      <div className="gap-3 lg:gap-4 relative self-stretch w-full flex flex-col lg:flex-row items-stretch">
        <div className="inline-flex flex-col items-start gap-3 lg:gap-4 relative w-full lg:w-[456px]">
          <div className="inline-flex w-full h-[154px] lg:h-[154px] items-stretch gap-3 lg:gap-4 relative flex-col sm:flex-row">
            {earningsCards.map((card, index) => (
              <article
                key={index}
                className="flex flex-col w-full sm:w-[220px] items-start justify-between pt-3 lg:pt-4 pb-4 lg:pb-6 px-3 lg:px-4 relative bg-gray-fill rounded-xl lg:rounded-2xl shadow-shadow"
              >
                <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-2 relative flex-[0_0_auto]">
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] text-right tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
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
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-label-small font-[number:var(--label-small-font-weight)] text-[#5d4bff] text-[length:var(--label-small-font-size)] text-right tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
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

          <aside className="flex flex-col sm:flex-row items-center justify-center gap-3 px-3 lg:px-4 py-3 lg:py-4 relative self-stretch w-full h-[92px] lg:h-[92px] bg-[#eeecfe] rounded-xl lg:rounded-2xl">
            <div className="flex-col items-start gap-1 flex-1 grow flex justify-center relative text-center sm:text-left">
              <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#5d4bff] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                Bonuses available!
              </h3>

              <p className="relative flex items-center justify-center self-stretch font-paragraph-medium font-[number:var(--paragraph-medium-font-weight)] text-[#5d4bff] text-[length:var(--paragraph-medium-font-size)] tracking-[var(--paragraph-medium-letter-spacing)] leading-[var(--paragraph-medium-line-height)] [font-style:var(--paragraph-medium-font-style)]">
                The more you participate, the more you earn.
              </p>
            </div>

            <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-2 py-3 relative flex-[0_0_auto] bg-[#5d4bff] rounded-lg">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-small font-[number:var(--caption-small-font-weight)] text-[#fdfdfd] text-[length:var(--caption-small-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                SEE OPPORTUNITIES
              </span>
            </button>
          </aside>
        </div>

        <article className="flex flex-col items-start pt-4 lg:pt-6 pb-3 lg:pb-4 px-3 lg:px-4 relative flex-1 self-stretch w-full h-[301px] lg:h-[301px] rounded-xl lg:rounded-2xl border border-solid border-[#eeecfe]">
          <header className="items-start justify-between self-stretch w-full flex-[0_0_auto] relative flex">
            <div className="inline-flex items-start justify-end gap-2 relative flex-[0_0_auto]">
              <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] text-right tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                EARNINGS HISTORY
              </h3>
            </div>
          </header>

          <div className="relative flex-1 self-stretch w-full">
            <div className="flex flex-col w-full lg:w-[456px] h-[158px] items-start justify-between absolute top-[37px] left-0">
              <div className="flex items-center gap-[8.36px] relative self-stretch w-full flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                  1.1K
                </span>

                <img
                  className="relative flex-1 grow h-px"
                  alt="Line"
                  src="/assets/img/line-112.svg"
                />
              </div>

              <div className="flex items-center gap-[8.36px] relative self-stretch w-full flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                  1K
                </span>

                <img
                  className="relative flex-1 grow h-px"
                  alt="Line"
                  src="/assets/img/line-112-1.svg"
                />
              </div>

              <div className="flex items-center gap-[8.36px] relative self-stretch w-full flex-[0_0_auto]">
                <span className="w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] whitespace-nowrap relative flex items-center justify-center leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                  900
                </span>

                <img
                  className="relative flex-1 grow h-px"
                  alt="Line"
                  src="/assets/img/line-112-4.svg"
                />
              </div>

              <div className="flex items-center gap-[8.36px] relative self-stretch w-full flex-[0_0_auto]">
                <span className="w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] whitespace-nowrap relative flex items-center justify-center leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                  800
                </span>

                <img
                  className="relative flex-1 grow h-px"
                  alt="Line"
                  src="/assets/img/line-112-4.svg"
                />
              </div>

              <div className="flex items-center gap-[8.36px] relative self-stretch w-full flex-[0_0_auto]">
                <span className="w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] whitespace-nowrap relative flex items-center justify-center leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                  700
                </span>

                <img
                  className="relative flex-1 grow h-px"
                  alt="Line"
                  src="/assets/img/line-112-4.svg"
                />
              </div>
            </div>

            <div className="flex w-full lg:w-[405px] h-[250px] items-end gap-2 absolute top-0 left-[43px]">
              {chartData.map((data, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    data.value === 1000
                      ? "items-center gap-2"
                      : "h-[183.34px] items-center gap-[4.18px]"
                  } relative flex-1 grow`}
                >
                  {data.value === 1000 ? (
                    <>
                      <div className="flex items-center justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-[#eeecfe] rounded-lg">
                        <span className="w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] whitespace-nowrap relative flex items-center justify-center leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                          {data.value.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex flex-col h-[183.34px] items-center gap-[4.18px] relative self-stretch w-full">
                        <div className="flex-1 w-full grow bg-[#eeecfe] rounded-[4.18px_4.18px_0px_0px] relative self-stretch" />

                        <div className="flex items-center justify-center gap-[4.18px] p-[4.18px] relative self-stretch w-full flex-[0_0_auto] border-t-[0.52px] [border-top-style:solid] border-[#eeecfe]">
                          <span className="relative flex items-center justify-center w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                            {data.month}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow">
                        <div className="flex items-center justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-[#eeecfe] rounded-lg">
                          <span className="w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] whitespace-nowrap relative flex items-center justify-center leading-[var(--caption-medium-line-height)] [font-style:var(--caption-medium-font-style)]">
                            {data.value}
                          </span>
                        </div>

                        <div className="flex-1 w-full grow bg-[#eeecfe] rounded-[4.18px_4.18px_0px_0px] relative self-stretch" />
                      </div>

                      <div className="flex items-center justify-center gap-[4.18px] p-[4.18px] relative self-stretch w-full flex-[0_0_auto] border-t-[0.52px] [border-top-style:solid] border-[#eeecfe]">
                        <span className="relative flex items-center justify-center w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] text-center tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                          {data.month}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

