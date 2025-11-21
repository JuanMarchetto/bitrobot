import { useState } from "react";
import { carouselSlides, carouselIndicators } from "../../constants";
import { SectionHeader } from "../UI/SectionHeader";
import { typography } from "../../utils/classNames";

export const DiscoverCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselIndicators.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselIndicators.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="flex flex-col items-start gap-4 lg:gap-6 relative self-stretch w-full flex-[0_0_auto] min-w-0 max-w-full">
      <header className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <SectionHeader label="DISCOVER" />

        <h1 className={`relative flex items-center justify-center w-fit ${typography.headingSmall}`}>
          Explore the BitRobot Network
        </h1>
      </header>

      <div className="flex flex-col items-center gap-3 lg:gap-4 flex-[0_0_auto] relative self-stretch w-full max-w-full">
        <div className="flex items-center justify-center gap-2 lg:gap-4 relative self-stretch w-full flex-[0_0_auto] max-w-full">
          <button
            onClick={handlePrevSlide}
            className="relative w-5 h-5 lg:w-6 lg:h-6 aspect-[1] flex-shrink-0"
            aria-label="Previous slide"
          >
            <img
              alt="Chevron left"
              src="/assets/img/chevron-left.svg"
            />
          </button>

          <div className="relative w-full max-w-full overflow-hidden flex-1 min-w-0">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {carouselSlides.map((slide, index) => (
                <article
                  key={index}
                  className="w-full h-[200px] sm:h-[220px] lg:h-[246px] bg-[#fdfdfd] rounded-xl lg:rounded-2xl overflow-hidden border border-solid border-[#eeecfe] relative flex-shrink-0"
                  style={{ flex: '0 0 100%' }}
                >
                <img
                  className="absolute left-0 bottom-[-409px] w-full h-[200px] sm:h-[220px] lg:h-[246px]"
                  alt="Background image"
                  src={slide.bgImage1}
                />

                <img
                  className="absolute left-0 bottom-[-409px] w-full h-[200px] sm:h-[220px] lg:h-[246px]"
                  alt="Background image overlay"
                  src={slide.bgImage2}
                />

                <div className="flex-col w-full max-w-[calc(100%-24px)] lg:max-w-[440px] gap-2 lg:gap-3 absolute left-3 lg:left-4 bottom-3 lg:bottom-4 flex items-start pr-3 lg:pr-0">
                  <img
                    className="relative w-6 h-6 lg:w-8 lg:h-8"
                    alt={slide.title}
                    src={slide.icon}
                  />

                  <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#5d4bff] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                      {slide.title}
                    </h2>

                    <p className="relative flex items-center justify-center self-stretch font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-gray-2 text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                      {slide.description}
                    </p>
                  </div>

                  <div className="inline-flex items-start gap-1.5 lg:gap-2 relative flex-[0_0_auto] flex-wrap">
                    <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-2 py-2 lg:py-3 relative flex-[0_0_auto] bg-[#5d4bff] rounded-lg">
                      <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-small font-[number:var(--caption-small-font-weight)] text-[#fdfdfd] text-[10px] lg:text-[length:var(--caption-small-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                        GET INVOLVED
                      </span>
                    </button>

                    <button className="all-[unset] box-border gap-2 flex-[0_0_auto] inline-flex items-center justify-center px-2 py-2 lg:py-3 relative rounded-lg border border-solid border-[#5d4bff]">
                      <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-small font-[number:var(--caption-small-font-weight)] text-[#5d4bff] text-[10px] lg:text-[length:var(--caption-small-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                        LEARN MORE
                      </span>
                    </button>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-1.5 lg:gap-2 pl-2 lg:pl-3 pr-3 lg:pr-4 py-1.5 lg:py-2 absolute top-3 lg:top-4 right-3 lg:right-4 bg-gold-100 rounded-lg shadow-shadow-1">
                  <img
                    className="relative w-3 h-3 lg:w-4 lg:h-4"
                    alt="Points"
                    src="/assets/img/points-1.svg"
                  />

                  <span className="relative flex items-center justify-center w-fit [font-family:'PP_NeueBit-Bold',Helvetica] font-bold text-goldprimary text-xs lg:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    EARN {slide.points} PTS
                  </span>
                </div>
              </article>
              ))}
            </div>
          </div>

          <button
            onClick={handleNextSlide}
            className="relative w-5 h-5 lg:w-6 lg:h-6 aspect-[1] flex-shrink-0"
            aria-label="Next slide"
          >
            <img
              alt="Chevron right"
              src="/assets/img/chevron-right.svg"
            />
          </button>
        </div>
      </div>

      <nav
        className="flex h-1 items-center gap-1 relative justify-center w-full"
        aria-label="Carousel indicators"
      >
        {carouselIndicators.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 rounded-[99px] relative self-stretch ${
              index === currentSlide ? "bg-[#5d4bff]" : "bg-[#eeecfe]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </nav>
    </section>
  );
};

