import React from "react";
import styled from "styled-components";

const StyledRickAndMorty = styled.div`
	font-size: 2rem;
	padding: 4rem;
	border-radius: 1rem;
	background-color: white;
	border: 1px solid black;
	max-width: 10rem;
	color: black;
`;

const RickAndMorty = () => {
	return <StyledRickAndMorty>Rick And Morty</StyledRickAndMorty>;
};

export default RickAndMorty;
