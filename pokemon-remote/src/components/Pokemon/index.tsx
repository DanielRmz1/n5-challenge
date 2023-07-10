import React, { FC, useState, useRef } from "react";
import { usePokemonList } from "hooks/usePokemons";
import Entity from "components/Entity";
import useIntersection from "hooks/useIntersection";

interface Props {
	language: "en" | "es";
}

const Pokemon: FC<Props> = ({ language = "en" }) => {
	const [pageIndex, setPageIndex] = useState<number>(0);
	const [list, isLoading] = usePokemonList(pageIndex);
	const ref = useRef<HTMLDivElement>(null);
	useIntersection(ref, () => setPageIndex((prev) => prev + 10));
	if (isLoading || !list?.length) {
		return <div>Loading pokemons...</div>;
	}
	return (
		<>
			{list.map((pokemon) => (
				<Entity {...pokemon} />
			))}
			<div ref={ref}>{isLoading && "Loading..."}</div>
		</>
	);
};

export default Pokemon;
