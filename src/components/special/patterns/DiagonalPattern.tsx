interface Props {
    width?: number
    color?: string
    className?: string
}

const DiagonalPattern = ({
    width,
    color,
    className
}: Props) => {
  return (
    <svg
      viewBox="0 0 800 800"
      opacity="1"
      width="100%"
      height="100%"
      className={className}
    >
        <pattern id="myPattern" width="100%" height="100%" patternUnits="userSpaceOnUse">
            <g strokeWidth={width || 20} stroke={color || "white"} fill="none">
                <line x1="0" y1="0" x2="400" y2="400"></line>
                <line x1="400" y1="0" x2="800" y2="400"></line>
                <line x1="800" y1="0" x2="1200" y2="400"></line>
                <line x1="0" y1="400" x2="400" y2="800"></line>
                <line x1="400" y1="400" x2="800" y2="800"></line>
                <line x1="800" y1="400" x2="1200" y2="800"></line>
                <line x1="0" y1="800" x2="400" y2="1200"></line>
                <line x1="400" y1="800" x2="800" y2="1200"></line>
                <line x1="800" y1="800" x2="1200" y2="1200"></line>
            </g>
        </pattern>
        <rect x="0" y="0" width="100%" height="20000" fill="url(#myPattern)" />
    </svg>
  );
};


export default DiagonalPattern