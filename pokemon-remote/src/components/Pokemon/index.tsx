import React from "react";
import styled from "styled-components";

const StyledPokemon = styled.div`
	font-size: 2rem;
	width: 100%;
	color: var(--secondary-text-color);
`;

const Pokemon = () => {
	return <StyledPokemon>Metapod</StyledPokemon>;
};

export default Pokemon;
