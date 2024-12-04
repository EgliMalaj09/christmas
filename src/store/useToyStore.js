import { create } from "zustand";

export const useToyStore = create((set) => ({
    selectedToyName: 'ChristmasBall', 
    selectToy: (name) => set({ selectedToyName: name }), 
}));
