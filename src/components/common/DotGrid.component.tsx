import { useEffect, useRef, useState } from "react";

interface Props {
  numRows?: number;
  dotRadius?: number;
  dotSpacing?: number;
}

function DotGrid({ numRows = 10, dotRadius = 1.5, dotSpacing = 6 }: Props) {
  const [gridWidth, setGridWidth] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGridWidth = () => {
        console.log("update")
      if (gridRef.current) {
        setGridWidth(gridRef.current.offsetWidth);

      }
    };
    updateGridWidth();
    window.addEventListener("resize", updateGridWidth);
    return () => window.removeEventListener("resize", updateGridWidth);
  }, []);

  const grid: React.ReactNode[] = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < Math.ceil(gridWidth / dotSpacing); col++) {
      const x = col * dotSpacing;
      const y = row * dotSpacing;
      grid.push(
        <circle
          key={`${row}-${col}`}
          cx={x - dotRadius}
          cy={y - dotRadius}
          r={dotRadius}
          fill="#ff510c"
        />
      );
    }
  }

  return (
    <div ref={gridRef}>
      <svg width={gridWidth} height={numRows * dotSpacing}>
        {grid}
      </svg>
    </div>
  );

}

export default DotGrid