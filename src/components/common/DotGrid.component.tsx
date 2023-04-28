import { useEffect, useRef, useState } from "react";

interface Props {
  numRowsInitial?: number
  numRowsMobile?: number
  dotRadius?: number
  dotSpacing?: number
}

function DotGrid({ numRowsInitial = 10, numRowsMobile = 8, dotRadius = 1.5, dotSpacing = 6 }: Props) {
  return null
  /*const [numRows, setNumRows] = useState<number>(numRowsInitial);
  const [gridWidth, setGridWidth] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGridWidth = () => {
      if (gridRef.current) {
        setGridWidth(gridRef.current.offsetWidth);
      }
      // Set number of rows based on window size
      if (window.innerWidth < 1200) {
        setNumRows(numRowsMobile);
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
          fill="#461709"
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
  );*/

}

export default DotGrid