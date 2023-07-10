import { Actions, Store } from "types/store";
import { create } from "zustand";
import { StateCreator } from "zustand/vanilla";
import { languages } from "constants/constants";

const useStore: StateCreator<Store & Actions> = (set) => ({
	language: languages[0],
	setLanguage: (language) => set({ language }),
});

export default create<Store & Actions>()(useStore);
