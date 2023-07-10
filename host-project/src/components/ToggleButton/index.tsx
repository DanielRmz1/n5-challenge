import React from "react";
import Button from "components/Button";
import { languages } from "constants/constants";
import useStore from "hooks/useStore";
import { Language } from "types/language";

const ToggleButton = () => {
	const [selectedLanguage, setLanguage] = useStore((state) => [
		state.language,
		state.setLanguage,
	]);
	const handleToggleClick = (lang: Language) => setLanguage(lang);
	return languages.map((lang, index) => (
		<Button
			key={index}
			secondary={lang.code === selectedLanguage.code}
			onClick={() => handleToggleClick(lang)}>
			{lang.name}
		</Button>
	));
};

export default ToggleButton;
