import React, { FC, useState, useEffect, useRef } from "react";
import LanguageContext from "context/LanguageContext";
import { FormattedMessage } from "react-intl";
import useIntersection from "hooks/useIntersection";
import { useCharacterList } from "hooks/useRickAndMorty";
import Entity from "components/Entity";

interface Props {
	language: string;
}

const RickAndMorty: FC<Props> = ({ language }) => {
	const [lang, setLang] = useState(language);
	const [pageIndex, setPageIndex] = useState<number>(0);
	const ref = useRef<HTMLDivElement>(null);
	const [list, isLoading] = useCharacterList(pageIndex);
	useIntersection(ref, () => setPageIndex((prev) => prev + 10));

	useEffect(() => {
		setLang(language);
	}, [language]);

	const renderLoading = () => <FormattedMessage id="app.rickmorty.loading" />;

	const renderContent = () => {
		return (
			<>
				{list.map((character, index) => (
					<Entity {...character} key={index} />
				))}
				<div ref={ref}>{isLoading && renderLoading()}</div>
			</>
		);
	};

	return (
		<LanguageContext.Provider value={{ language: lang }}>
			{renderContent()}
		</LanguageContext.Provider>
	);
};

export default RickAndMorty;
