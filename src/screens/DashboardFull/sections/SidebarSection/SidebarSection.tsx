import { resourceItems, ResourceItem } from "../../../../constants";
import { LogoHeader } from "../../../../components/Sidebar/LogoHeader";
import { MainNavigation } from "../../../../components/Sidebar/MainNavigation";
import { useHashNavigation } from "../../../../hooks/useHashNavigation";

interface IconProps {
  iconPath: string;
  className?: string;
}

const HelpCircleIcon = ({ className = "" }: { className?: string }) => {
  const clipPathId = `clip-help-circle-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M7.57496 7.49999C7.77088 6.94305 8.15759 6.47341 8.66659 6.17427C9.17559 5.87512 9.77404 5.76577 10.3559 5.86558C10.9378 5.96539 11.4656 6.26793 11.8459 6.7196C12.2261 7.17127 12.4342 7.74292 12.4333 8.33332C12.4333 9.99999 9.93329 10.8333 9.93329 10.8333M9.99996 14.1667H10.0083M18.3333 9.99999C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 9.99999C1.66663 5.39762 5.39759 1.66666 9.99996 1.66666C14.6023 1.66666 18.3333 5.39762 18.3333 9.99999Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const File05Icon = ({ className = "" }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M11.6667 1.89127V5.33338C11.6667 5.80009 11.6667 6.03345 11.7575 6.21171C11.8374 6.36851 11.9649 6.49599 12.1217 6.57589C12.3 6.66672 12.5333 6.66672 13 6.66672H16.4422M11.6667 14.1667H6.66671M13.3334 10.8333H6.66671M16.6667 8.32351V14.3333C16.6667 15.7335 16.6667 16.4335 16.3942 16.9683C16.1545 17.4387 15.7721 17.8212 15.3017 18.0608C14.7669 18.3333 14.0668 18.3333 12.6667 18.3333H7.33337C5.93324 18.3333 5.23318 18.3333 4.6984 18.0608C4.22799 17.8212 3.84554 17.4387 3.60586 16.9683C3.33337 16.4335 3.33337 15.7335 3.33337 14.3333V5.66666C3.33337 4.26653 3.33337 3.56646 3.60586 3.03168C3.84554 2.56128 4.22799 2.17882 4.6984 1.93914C5.23318 1.66666 5.93324 1.66666 7.33337 1.66666H10.0099C10.6213 1.66666 10.9271 1.66666 11.2148 1.73573C11.4699 1.79697 11.7137 1.89798 11.9374 2.03506C12.1897 2.18966 12.4059 2.40585 12.8383 2.83823L15.4951 5.49508C15.9275 5.92746 16.1437 6.14365 16.2983 6.39594C16.4354 6.61962 16.5364 6.86349 16.5976 7.11858C16.6667 7.4063 16.6667 7.71203 16.6667 8.32351Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShoppingBag02Icon = ({ className = "" }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M13.3336 7.49999V4.99999C13.3336 3.15904 11.8412 1.66666 10.0003 1.66666C8.15932 1.66666 6.66693 3.15904 6.66693 4.99999V7.49999M2.9936 8.62663L2.4936 13.96C2.35144 15.4764 2.28036 16.2346 2.53198 16.8202C2.75302 17.3347 3.14037 17.76 3.63195 18.0281C4.19154 18.3333 4.95307 18.3333 6.47614 18.3333H13.5244C15.0475 18.3333 15.809 18.3333 16.3686 18.0281C16.8602 17.76 17.2475 17.3347 17.4686 16.8202C17.7202 16.2346 17.6491 15.4764 17.5069 13.96L17.0069 8.62663C16.8869 7.34611 16.8269 6.70585 16.5389 6.22179C16.2853 5.79548 15.9105 5.45425 15.4624 5.24153C14.9536 4.99999 14.3105 4.99999 13.0244 4.99999L6.97614 4.99999C5.69001 4.99999 5.04694 4.99999 4.53812 5.24153C4.08999 5.45425 3.71527 5.79548 3.46165 6.22179C3.17368 6.70585 3.11365 7.34611 2.9936 8.62663Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircleIcon = ({ className = "" }: { className?: string }) => {
  const clipPathId = `clip-info-circle-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M9.99996 13.3334V10M9.99996 6.66669H10.0083M18.3333 10C18.3333 14.6024 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6024 1.66663 10C1.66663 5.39765 5.39759 1.66669 9.99996 1.66669C14.6023 1.66669 18.3333 5.39765 18.3333 10Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const getIconName = (iconPath: string): string => {
  const match = iconPath.match(/\/([^\/]+)\.svg$/);
  return match ? match[1] : "";
};

const Icon = ({ iconPath, className = "" }: IconProps) => {
  const iconName = getIconName(iconPath);

  switch (iconName) {
    case "help-circle":
      return <HelpCircleIcon className={className} />;
    case "file-05":
      return <File05Icon className={className} />;
    case "shopping-bag-02":
      return <ShoppingBag02Icon className={className} />;
    case "info-circle":
      return <InfoCircleIcon className={className} />;
    default:
      return (
        <img
          className={className}
          alt=""
          src={iconPath}
          aria-hidden="true"
        />
      );
  }
};

export const SidebarSection = () => {
  const currentHash = useHashNavigation();


  return (
    <aside
      className="hidden xl:flex absolute top-0 left-0 w-full lg:w-[264px] bottom-0 flex-col justify-between bg-[#fdfdfd]"
      role="navigation"
      aria-label="Main navigation"
    >
      <LogoHeader />

      <div className="flex w-full lg:w-[264px] flex-1 relative flex-col items-start pt-2 pb-6 lg:pb-10 px-2 border-r [border-right-style:solid] border-[#eeecfe] min-h-0 gap-4 lg:gap-6">
        <MainNavigation currentHash={currentHash} />

        <div className="flex flex-col items-start gap-4 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#eeecfe] rounded-lg shadow-shadow-1">
              <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-[#5d4bff] text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
                RESOURCES
              </h2>
            </div>

            <nav
              className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
              aria-label="Resources navigation"
            >
              {resourceItems.map((item: ResourceItem) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center justify-between px-1 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#eeecfe] no-underline hover:bg-[#f9f9f9] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <div className="relative w-5 h-5 aspect-[1] text-gray-2 group-hover:text-[#5d4bff] transition-colors duration-200">
                      <Icon iconPath={item.icon} className="w-full h-full" />
                    </div>
                    <span className="relative flex items-center justify-center w-fit font-caption-large font-[number:var(--caption-large-font-weight)] text-gray-2 group-hover:text-[#5d4bff] text-[length:var(--caption-large-font-size)] tracking-[var(--caption-large-letter-spacing)] leading-[var(--caption-large-line-height)] whitespace-nowrap [font-style:var(--caption-large-font-style)] transition-colors duration-200">
                      {item.label}
                    </span>
                  </div>
                  <img
                    className="relative w-5 h-5 aspect-[1] group-hover:absolute group-hover:top-1 group-hover:right-1 transition-all duration-200"
                    alt="External link"
                    src={item.externalIcon}
                  />
                </a>
              ))}
            </nav>
          </div>

          <section
            className="flex flex-col w-full lg:w-[216px] items-start gap-6 lg:gap-10 p-3 lg:p-4 relative flex-[0_0_auto] bg-gray-fill rounded-xl lg:rounded-2xl shadow-shadow"
            aria-labelledby="earn-points-heading"
          >
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2 pl-3 pr-4 py-2 relative flex-[0_0_auto] bg-gold-100 rounded-lg shadow-shadow-1">
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="/assets/img/points.svg"
                  aria-hidden="true"
                />
                <span
                  id="earn-points-heading"
                  className="relative flex items-center justify-center w-fit font-caption-medium font-[number:var(--caption-medium-font-weight)] text-goldprimary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]"
                >
                  EARN PTS
                </span>
              </div>
              <button
                type="button"
                aria-label="Information about earning points"
                className="relative w-5 h-5 aspect-[1] cursor-pointer"
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src="/assets/img/info-circle-1.svg"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="flex-col gap-3 relative self-stretch w-full flex-[0_0_auto] flex items-start">
              <div className="flex-col items-start gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="items-baseline gap-1.5 self-stretch w-full flex-[0_0_auto] flex relative">
                  <span className="w-fit mt-[-1.00px] [font-family:'Aeonik-Medium',Helvetica] font-medium text-[#5d4bff] text-2xl tracking-[-0.24px] relative flex items-center justify-center leading-[normal]">
                    12
                  </span>
                  <span className="items-center justify-center w-fit font-label-small font-[number:var(--label-small-font-weight)] text-[#5d4bff] text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] flex relative [font-style:var(--label-small-font-style)]">
                    referrals
                  </span>
                </div>
                <p className="relative flex items-center justify-center self-stretch font-label-x-small font-[number:var(--label-x-small-font-weight)] text-gray-2 text-[length:var(--label-x-small-font-size)] tracking-[var(--label-x-small-letter-spacing)] leading-[var(--label-x-small-line-height)] [font-style:var(--label-x-small-font-style)]">
                  Refer friends to earn more
                </p>
              </div>

              <button
                type="button"
                className="all-[unset] box-border h-[34px] gap-1 inline-flex items-center justify-center px-2 py-3 relative rounded-lg border border-solid border-[#5d4bff] cursor-pointer hover:bg-[#5d4bff] hover:text-white transition-colors"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-caption-small font-[number:var(--caption-small-font-weight)] text-[#5d4bff] text-[length:var(--caption-small-font-size)] text-center tracking-[var(--caption-small-letter-spacing)] leading-[var(--caption-small-line-height)] whitespace-nowrap [font-style:var(--caption-small-font-style)]">
                  SHARE LINK
                </span>
                <img
                  className="relative w-3 h-3 mt-[-1.00px] mb-[-1.00px] aspect-[1]"
                  alt=""
                  src="/assets/img/share-02.svg"
                  aria-hidden="true"
                />
              </button>
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};
