import React, { FC } from "react";
import { IPokemon, LanguageProp } from "types/pokemon";
import styled from "styled-components";
import { usePokemonDetail } from "hooks/usePokemons";
import EntityDescription from "./components/EntityDescription";
import { FormattedMessage } from "react-intl";

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

const Entity: FC<IPokemon & LanguageProp> = ({ url, language }) => {
	const [detail, isLoading] = usePokemonDetail(url);
	const renderLoadingMessage = () => <FormattedMessage id="app.loading" />;
	if (isLoading) {
		return renderLoadingMessage();
	}
	return (
		<StyledEntity>
			<div>
				<img src={detail.sprites.front_default} width="100px" />
			</div>
			<div className="entity__description">
				{isLoading ? (
					renderLoadingMessage()
				) : (
					<EntityDescription {...detail} language={language} />
				)}
			</div>
		</StyledEntity>
	);
};

export default Entity;
