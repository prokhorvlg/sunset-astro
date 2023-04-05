import { useState, useEffect } from "react";

const BlinkingGrid = () => {
    const [gridState, setGridState] = useState(randomizeGridState());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setGridState(randomizeGridState());
        }, 500);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
  
    return (
      <div className="blinking-grid">
        {gridState.map((squareState, index) => (
          <div
            key={index}
            className={`square ${squareState}`}
          ></div>
        ))}
      </div>
    );
  };
  

enum SquareState {
    UNLIT = 'unlit',
    YELLOW = 'yellow',
    RED = 'red',
  };
  
  const randomizeGridState = () => {
    const gridState: SquareState[] = [];
    for (let i = 0; i < 9; i++) {
      gridState.push(SquareState.UNLIT);
    }
  
    // set 4 red squares
    let redCount = 0;
    while (redCount < 4) {
      const index = Math.floor(Math.random() * 9);
      if (gridState[index] === SquareState.UNLIT) {
        gridState[index] = SquareState.RED;
        redCount++;
      }
    }
  
    // set 3 yellow squares
    let yellowCount = 0;
    while (yellowCount < 3) {
      const index = Math.floor(Math.random() * 9);
      if (gridState[index] === SquareState.UNLIT) {
        gridState[index] = SquareState.YELLOW;
        yellowCount++;
      }
    }
  
    // set 2 unlit squares
    let unlitCount = 0;
    while (unlitCount < 2) {
      const index = Math.floor(Math.random() * 9);
      if (gridState[index] === SquareState.UNLIT) {
        gridState[index] = SquareState.UNLIT;
        unlitCount++;
      }
    }
  
    return gridState;
  };

  export default BlinkingGrid