import { writable } from "svelte/store";

function outputStore() {
  const { subscribe, set, update } = writable("");

  return {
    subscribe,
    addData: (output) => update(() => {
        let dispData = new Array();
        output.map((item) => {
            dispData.push(item);
        });
        return dispData.slice(Math.max(dispData.length - 6, 1)).reverse();
    }),
    resetData: () => set(""),
  };
}

export const output = outputStore();