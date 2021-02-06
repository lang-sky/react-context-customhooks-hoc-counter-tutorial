import React from "react";
import { CounterContextConsumer } from "../contexts/CouterContext";

const ConsumerComponent = () => {
  return (
    <>
      <CounterContextConsumer>
        {({ count, increment, decrement }) => (
          <>
            CounterContextConsumer: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </>
        )}
      </CounterContextConsumer>
    </>
  );
};

export default ConsumerComponent;
