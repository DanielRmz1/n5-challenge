import React from "react";
import Button from "components/Button";
import { languages } from "constants/constants";
import useStore from "hooks/useStore";
import { Language } from "types/language";
import { FormattedMessage } from "react-intl";

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
			<FormattedMessage id={`app.${lang.code}`} />
		</Button>
	));
};

export default ToggleButton;
