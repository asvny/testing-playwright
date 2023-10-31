import * as React from "react";
import { signal, Signal } from "@preact/signals-react";

export class Store {
  count: Signal<number> = signal(0);
}

export class Presenter {
  onAdd(store: Store) {
    store.count.value = store.count.value + 1;
  }

  onSubtract(store: Store) {
    store.count.value = store.count.value - 1;
  }
}

interface CounterProps {
  value: number;
  onAdd: () => void;
  onSubtract: () => void;
}

export function Counter(props: CounterProps) {
  const { value, onAdd, onSubtract } = props;

  return (
    <div>
      <button type="button" title="increment" onClick={onSubtract}>
        -
      </button>

      <label aria-label="counter-value">
        <input readOnly value={value} />
      </label>

      <button type="button" title="decrement" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export function createCounter() {
  const store = new Store();
  const presenter = new Presenter();

  const impl = () => (
    <Counter
      value={store.count.value}
      onAdd={() => presenter.onAdd(store)}
      onSubtract={() => presenter.onSubtract(store)}
    />
  );

  return {
    Counter: impl,
  };
}
