import { test, expect } from "@playwright/test";
import { Store, Presenter } from "./counter";

test("store has correct value on add", async () => {
  const store = new Store();
  const presenter = new Presenter();

  expect(store.count.value).toBe(0);

  presenter.onAdd(store);

  expect(store.count.value).toBe(1);
});

test("store has correct value on multiple add", async () => {
  const store = new Store();
  const presenter = new Presenter();

  expect(store.count.value).toBe(0);

  presenter.onAdd(store);
  presenter.onAdd(store);
  presenter.onAdd(store);

  expect(store.count.value).toBe(3);
});

test("store has correct value on subtract", async () => {
  const store = new Store();
  const presenter = new Presenter();

  expect(store.count.value).toBe(0);

  presenter.onSubtract(store);

  expect(store.count.value).toBe(-1);
});

test("store has correct value on multiple subtract", async () => {
  const store = new Store();
  const presenter = new Presenter();

  expect(store.count.value).toBe(0);

  presenter.onSubtract(store);
  presenter.onSubtract(store);
  presenter.onSubtract(store);

  expect(store.count.value).toBe(-3);
});

test("store has correct value on add/subtract", async () => {
  const store = new Store();
  const presenter = new Presenter();

  expect(store.count.value).toBe(0);

  presenter.onAdd(store);
  presenter.onSubtract(store);
  presenter.onAdd(store);
  presenter.onSubtract(store);
  presenter.onAdd(store);
  presenter.onSubtract(store);
  presenter.onAdd(store);

  expect(store.count.value).toBe(1);
});
