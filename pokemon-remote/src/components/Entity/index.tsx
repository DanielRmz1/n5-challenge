import React, { FC } from "react";
import { IPokemon } from "types/pokemon";
import styled from "styled-components";
import { usePokemonDetail } from "hooks/usePokemons";

const StyledEntity = styled.div`
	display: grid;
	grid-template-columns: 8rem 1fr;

	padding: 1rem;
	width: 100%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	max-height: 8rem;

	.entity__description {
		display: grid;
		grid-template-columns: repeat(auto-fill, 10rem);
		text-transform: capitalize;
	}
`;

const Entity: FC<IPokemon> = ({ url, name }) => {
	const [detail, isLoading] = usePokemonDetail(url);
	const renderDetailInformation = () => (
		<>
			<div>
				<strong>Name:</strong> {name}
			</div>
			<div>
				<strong>Experience:</strong> {detail.base_experience}
			</div>
			<div>
				<strong>Height:</strong> {detail.height}
			</div>
			<div>
				<strong>Weight:</strong> {detail.weight}
			</div>
			{detail.stats.map((stat) => (
				<div>
					<strong>{stat.stat.name}</strong> {stat.base_stat}
				</div>
			))}
		</>
	);
	const renderLoadingMessage = () => <div>Loading...</div>;
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<StyledEntity>
			<div>
				<img src={detail.sprites.front_default} width="100px" />
			</div>
			<div className="entity__description">
				{isLoading ? renderLoadingMessage() : renderDetailInformation()}
			</div>
		</StyledEntity>
	);
};

export default Entity;
