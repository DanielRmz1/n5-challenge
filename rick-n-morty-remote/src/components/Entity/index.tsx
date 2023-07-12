import React, { FC } from "react";
import { Character } from "types/rickAndMorty";
import styled from "styled-components";
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
		grid-template-columns: repeat(auto-fill, 12rem);
		text-transform: capitalize;
	}
`;

const Entity: FC<Character> = ({ image, name, species, origin, location }) => {
	return (
		<StyledEntity>
			<div>
				<img src={image} width="100px" height="100px" />
			</div>
			<div className="entity__description">
				<div data-testid="name">
					<strong>
						<FormattedMessage id={"app.rickmorty.name"} />:{" "}
					</strong>
					{name}
				</div>
				<div data-testid="species">
					<strong>
						<FormattedMessage id={"app.rickmorty.species"} />:{" "}
					</strong>
					{species}
				</div>
				<div data-testid="origin">
					<strong>
						<FormattedMessage id={"app.rickmorty.origin"} />:{" "}
					</strong>
					{origin.name}
				</div>
				<div data-testid="location">
					<strong>
						<FormattedMessage id={"app.rickmorty.location"} />:{" "}
					</strong>
					{location.name}
				</div>
			</div>
		</StyledEntity>
	);
};

export default Entity;
