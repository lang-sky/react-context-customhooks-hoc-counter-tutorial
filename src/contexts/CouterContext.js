import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  count: 0,
  increment() {},
  decrement() {}
});

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const CounterContextConsumer = ({ children }) => {
  return <CounterContext.Consumer>{children}</CounterContext.Consumer>;
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const withCounterContext = (WrappedComponent) => ({ ...props }) => {
  const counter = useCounterContext();
  return <WrappedComponent {...props} counter={counter} />;
};

export default CounterContext;
