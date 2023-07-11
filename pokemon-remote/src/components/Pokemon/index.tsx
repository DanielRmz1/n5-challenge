import React, { FC, useState, useRef } from "react";
import { usePokemonList } from "hooks/usePokemons";
import Entity from "components/Entity";
import useIntersection from "hooks/useIntersection";
import { FormattedMessage } from "react-intl";

interface Props {
	language: string;
}

const Pokemon: FC<Props> = ({ language }) => {
	const [pageIndex, setPageIndex] = useState<number>(0);
	const [list, isLoading] = usePokemonList(pageIndex);
	const ref = useRef<HTMLDivElement>(null);
	useIntersection(ref, () => setPageIndex((prev) => prev + 10));
	if (isLoading || !list?.length) {
		return <FormattedMessage id="app.pokemon.loading" />;
	}
	return (
		<>
			{list.map((pokemon) => (
				<Entity {...pokemon} language={language} />
			))}
			<div ref={ref}>{isLoading && "Loading..."}</div>
		</>
	);
};

export default Pokemon;
