import React, { useState, useEffect } from "react";
import Challenge from "views/Challenge";
import { IntlProvider } from "react-intl";
import translations, { Translation } from "translations";
import useStore from "hooks/useStore";

const App = () => {
	const language = useStore((state) => state.language);
	const [messages, setMessages] = useState<Translation>(
		translations[language.code]
	);

	useEffect(() => {
		setMessages(translations[language.code]);
	}, [language]);

	return (
		<IntlProvider locale={language.code} messages={messages}>
			<Challenge />
		</IntlProvider>
	);
};

export default App;
