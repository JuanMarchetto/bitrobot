interface ChartGridLineProps {
  label: string;
  lineImage: string;
}

export const ChartGridLine = ({ label, lineImage }: ChartGridLineProps) => {
  return (
    <div className="flex items-center gap-[8.36px] relative self-stretch w-full flex-[0_0_auto]">
      <span className="relative flex items-center justify-center w-fit mt-[-0.52px] font-caption-medium font-[number:var(--caption-medium-font-weight)] text-primary text-[length:var(--caption-medium-font-size)] tracking-[var(--caption-medium-letter-spacing)] leading-[var(--caption-medium-line-height)] whitespace-nowrap [font-style:var(--caption-medium-font-style)]">
        {label}
      </span>

      <img
        className="relative flex-1 grow h-px"
        alt="Line"
        src={lineImage}
      />
    </div>
  );
};

