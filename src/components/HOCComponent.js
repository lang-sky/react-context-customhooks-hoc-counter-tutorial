import React from "react";
import { withCounterContext } from "../contexts/CouterContext";

const HOCComponent = ({ counter }) => {
  return (
    <div>
      HOCComponent: {counter.count}
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
    </div>
  );
};

export default withCounterContext(HOCComponent);
