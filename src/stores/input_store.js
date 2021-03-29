import { writable } from "svelte/store";

function inputStore() {
  const { subscribe, set, update } = writable("");

  return {
    subscribe,
    addData: (input) => update(() => input),
    resetData: () => set(""),
  };
}

export const input = inputStore();
