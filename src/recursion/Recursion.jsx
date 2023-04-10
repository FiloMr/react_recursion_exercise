import React from "react";
import RecursiveComponent from "./RecursiveComponent";
import useTimer from "../hooks/useTimer";
import Memo, { memo } from "react";

const One = memo(({ children }) => <div>One {children}</div>);
const Two = memo(({ children }) => <div>Two {children}</div>);
const Three = memo(({ children }) => <div>Three {children}</div>);
const components = [One, Two, Three];

function Recursion() {
  const seconds = useTimer();

  return (
    <div className="App-wrapper">
      <div className="App-timer">{seconds} seconds</div>
      <RecursiveComponent components={components} />
    </div>
  );
}

Recursion.propTypes = {
  // ...
};

export default Recursion;
