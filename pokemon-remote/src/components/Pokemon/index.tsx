import React, { FC, useState, useRef, useEffect } from "react";
import { usePokemonList } from "hooks/usePokemons";
import Entity from "components/Entity";
import useIntersection from "hooks/useIntersection";
import { FormattedMessage } from "react-intl";
import LanguageContext from "context/LanguageContext";

interface Props {
	language: string;
}

const Pokemon: FC<Props> = ({ language }) => {
	const [lang, setLang] = useState(language);
	const [pageIndex, setPageIndex] = useState<number>(0);
	const [list, isLoading] = usePokemonList(pageIndex);
	const ref = useRef<HTMLDivElement>(null);
	useIntersection(ref, () => setPageIndex((prev) => prev + 10));

	useEffect(() => {
		setLang(language);
	}, [language]);

	const renderLoading = () => <FormattedMessage id="app.pokemon.loading" />;

	const renderContent = () => {
		if (isLoading || !list?.length) {
			return renderLoading();
		}

		return (
			<>
				{list.map((pokemon) => (
					<Entity {...pokemon} />
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

export default Pokemon;
