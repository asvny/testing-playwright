import React from "react";
import { createCounter } from "./counter";

export const CounterForTest = () => {
  const { Counter } = createCounter();

  return <Counter />;
};
