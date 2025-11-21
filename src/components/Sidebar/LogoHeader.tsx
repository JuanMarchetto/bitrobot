export const LogoHeader = () => {
  return (
    <header className="flex w-full lg:w-[264px] h-[66px] relative flex-col items-start gap-2 pt-4 lg:pt-6 pb-2 px-4 lg:px-6">
      <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[50px] h-[50px] mt-[-6.00px] mb-[-10.00px] ml-[-8.00px] aspect-[1]"
          alt="BitRobot Icon"
          src="/assets/img/icon.svg"
        />
        <div className="inline-flex flex-col items-center justify-center gap-2 px-3 py-0 relative self-stretch flex-[0_0_auto] bg-white rounded-lg border border-solid border-stroke shadow-[0px_2px_8px_#00000012]">
          <div className="relative w-[85.09px] h-[18px]">
            <img
              className="absolute w-[98.97%] h-[99.27%] top-0 left-0"
              alt="BitRobot"
              src="/assets/img/vector.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

