interface HorizontalDividerProp {
  className?: string;
}

const HorizontalDivider = ({ className = "" }: HorizontalDividerProp) => {
  return <div className={`${className}`}></div>;
};

export default HorizontalDivider;
