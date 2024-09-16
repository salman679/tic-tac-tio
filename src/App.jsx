import { useState } from "react";

function Square({ value, clickHandler }) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 text-3xl leading-9 m-1"
      onClick={clickHandler}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function onClickHandler(i) {
    const nextSquare = square.slice();

    if (xIsNext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }

    nextSquare[i] = "o";
    setsquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="h-screen bg-current flex justify-center items-center">
        <div>
          <div className="flex justify-center">
            <Square value={square[0]} clickHandler={() => onClickHandler(0)} />
            <Square value={square[1]} clickHandler={() => onClickHandler(1)} />
            <Square value={square[2]} clickHandler={() => onClickHandler(2)} />
          </div>

          <div className="flex justify-center">
            <Square value={square[3]} clickHandler={() => onClickHandler(3)} />
            <Square value={square[4]} clickHandler={() => onClickHandler(4)} />
            <Square value={square[5]} clickHandler={() => onClickHandler(5)} />
          </div>

          <div className="flex justify-center">
            <Square value={square[6]} clickHandler={() => onClickHandler(6)} />
            <Square value={square[7]} clickHandler={() => onClickHandler(7)} />
            <Square value={square[8]} clickHandler={() => onClickHandler(8)} />
          </div>
        </div>
      </div>
    </>
  );
}
