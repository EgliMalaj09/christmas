import { create } from "zustand";

export const useToyStore = create((set) => ({
    selectedToyName: '', 
    selectToy: (name) => set({ selectedToyName: name }),
}));
