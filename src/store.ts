import create from "zustand";

type Store = {
  count: number;
  setCount: (count: number) => void;
  increaseCount: () => void;
  resetCount: () => void;
};

export const useStore = create<Store>((set, get) => ({
  count: 0,
  setCount: (count) => set({ count }),
  increaseCount: () => set({ count: get().count + 1 }),
  resetCount: () => set({ count: 0 }),
}));
