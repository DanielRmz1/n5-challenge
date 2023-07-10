import translation_en from "translations/en.json";
import translation_es from "translations/es.json";

export interface Translation {
	[x: string]: string;
}

interface Translations {
	[x: string]: {
		[x: string]: string;
	};
}

const translations: Translations = {
	en: translation_en,
	es: translation_es,
};

export default translations;
