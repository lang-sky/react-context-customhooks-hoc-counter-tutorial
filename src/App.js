import React from "react";
import ConsumerComponent from "./components/ConsumerComponent";
import HOCComponent from "./components/HOCComponent";
import { CounterContextProvider } from "./contexts/CouterContext";

import "./styles.css";

export default function App() {
  return (
    <CounterContextProvider>
      <ConsumerComponent />
      <HOCComponent />
    </CounterContextProvider>
  );
}
