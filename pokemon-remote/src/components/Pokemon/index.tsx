import React from "react";
import styled from "styled-components";

const StyledPokemon = styled.div`
	font-size: 2rem;
	padding: 4rem;
	border-radius: 1rem;
	background-color: white;
	border: 1px solid black;
	max-width: 10rem;
	color: black;
`;

const Pokemon = () => {
	return <StyledPokemon>Metapod</StyledPokemon>;
};

export default Pokemon;
