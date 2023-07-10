import { Language } from "types/language";

export interface Store {
	language: Language;
}

export interface Actions {
	setLanguage: (lang: Language) => void;
}
