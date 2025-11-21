import { chartData, chartGridLines } from "../../constants";
import { ChartGridLine } from "./ChartGridLine";

export const EarningsHistory = () => {
  return (
    <article className="flex flex-col items-start pt-4 lg:pt-6 pb-3 lg:pb-4 px-3 lg:px-4 relative xl:flex-1 w-full h-[301px] lg:h-[301px] rounded-xl lg:rounded-2xl border border-solid border-[#eeecfe] min-w-0 max-w-full">
      <header className="items-start justify-between self-stretch w-full flex-[0_0_auto] relative flex">
        <div className="inline-flex items-start justify-end gap-2 relative flex-[0_0_auto]">
          <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] text-right tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
            EARNINGS HISTORY
          </h3>
        </div>
      </header>

      <div className="relative flex-1 self-stretch w-full min-w-0 overflow-hidden">
        <div className="flex flex-col w-full max-w-full h-[158px] items-start justify-between absolute top-[37px] left-0 right-0">
          {chartGridLines.map((gridLine, index) => (
            <ChartGridLine key={index} label={gridLine.label} lineImage={gridLine.lineImage} />
          ))}
        </div>

        <div className="flex w-[calc(100%-86px)] lg:w-[405px] max-w-[calc(100%-86px)] h-[250px] items-end gap-2 absolute top-0 left-[43px] overflow-hidden">
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
  );
};

