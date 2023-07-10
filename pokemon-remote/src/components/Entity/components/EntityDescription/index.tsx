import React, { FC } from "react";
import { PokemonDetail } from "types/pokemon";

const EntityDescription: FC<PokemonDetail> = ({
	name,
	base_experience,
	height,
	weight,
	stats,
}) => {
	return (
		<>
			<div>
				<strong>Name:</strong> {name}
			</div>
			<div>
				<strong>Experience:</strong> {base_experience}
			</div>
			<div>
				<strong>Height:</strong> {height}
			</div>
			<div>
				<strong>Weight:</strong> {weight}
			</div>
			{stats.map((stat) => (
				<div>
					<strong>{stat.stat.name}</strong> {stat.base_stat}
				</div>
			))}
		</>
	);
};

export default EntityDescription;
