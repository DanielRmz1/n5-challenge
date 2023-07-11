import React, { FC } from "react";
import { LanguageProp, PokemonDetail } from "types/pokemon";
import { FormattedMessage } from "react-intl";
import Stat from "../Stat";

const EntityDescription: FC<PokemonDetail & LanguageProp> = ({
	name,
	base_experience,
	height,
	weight,
	stats,
	language,
}) => {
	return (
		<>
			<Stat
				description={<FormattedMessage id="app.pokemon.name" />}
				value={name}
			/>
			<Stat
				description={<FormattedMessage id="app.pokemon.experience" />}
				value={base_experience}
			/>
			<Stat
				description={<FormattedMessage id="app.pokemon.height" />}
				value={height}
			/>
			<Stat
				description={<FormattedMessage id="app.pokemon.weight" />}
				value={weight}
			/>
			{stats.map((stat) => (
				<Stat
					value={stat.base_stat}
					url={stat.stat.url}
					language={language}
				/>
			))}
		</>
	);
};

export default EntityDescription;
