import * as React from "react";
import * as ReactDOM from "react-dom";
import { createCounter } from "./counter";

const { Counter } = createCounter();

ReactDOM.render(<Counter />, document.querySelector("#app"));
