// Write function that set and update the store from the input window
// Write fn that pull from collection to store using watch()
// Write fn that displays from store to output window
// Write fn that pushes from store to MongoDB collection
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
