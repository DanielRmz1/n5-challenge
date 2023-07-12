import React, { FC } from "react";
import { LanguageProp, PokemonDetail } from "types/pokemon";
import { FormattedMessage } from "react-intl";
import Stat from "../Stat";

const EntityDescription: FC<PokemonDetail> = ({
	name,
	base_experience,
	height,
	weight,
	stats,
}) => {
	return (
		<>
			<Stat
				description={<FormattedMessage id="app.pokemon.name" />}
				value={name}
				data-testid="stat-name"
			/>
			<Stat
				description={<FormattedMessage id="app.pokemon.experience" />}
				value={base_experience}
				data-testid="stat-base_experience"
			/>
			<Stat
				description={<FormattedMessage id="app.pokemon.height" />}
				value={height}
				data-testid="stat-height"
			/>
			<Stat
				description={<FormattedMessage id="app.pokemon.weight" />}
				value={weight}
				data-testid="stat-weight"
			/>
			{stats.map((stat, index) => (
				<Stat
					value={stat.base_stat}
					url={stat.stat.url}
					key={index}
					data-testid={`stat-${stat.stat.name}`}
				/>
			))}
		</>
	);
};

export default EntityDescription;
