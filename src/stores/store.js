import { writable } from "svelte/store";

function dataStore() {
  const { subscribe, set, update } = writable("");

  return {
    subscribe,
    addData: (input) => update(() => input),
    resetData: () => set(""),
  };
}

export const data = dataStore();