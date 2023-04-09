import { useEffect, useRef, useState } from "react";

interface Props {
  numRowsInitial?: number;
  dotRadius?: number;
  dotSpacing?: number;
}

function DotGrid({ numRowsInitial = 10, dotRadius = 1.5, dotSpacing = 6 }: Props) {
  const [numRows, setNumRows] = useState<number>(numRowsInitial);
  const [gridWidth, setGridWidth] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGridWidth = () => {
      if (gridRef.current) {
        setGridWidth(gridRef.current.offsetWidth);
      }
      // Set number of rows based on window size
      if (window.innerWidth < 1100) {
        setNumRows(8);
      } else {
        setNumRows(numRowsInitial);
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
    <div ref={gridRef} className="dot-grid">
      <svg width={gridWidth} height={numRows * dotSpacing}>
        {grid}
      </svg>
    </div>
  );

}

export default DotGrid