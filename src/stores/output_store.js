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
        dispData.sort((a,b) => {
          let dateA = new Date(a.timestamp);
          let dateB = new Date(b.timestamp);
          return dateA - dateB;
        })
        return dispData.slice(Math.max(dispData.length - 5, 1)).reverse();
    }),
    resetData: () => set(""),
  };
}

export const output = outputStore();