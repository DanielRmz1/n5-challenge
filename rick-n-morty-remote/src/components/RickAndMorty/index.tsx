import React from "react";
import styled from "styled-components";

const StyledRickAndMorty = styled.div`
	font-size: 2rem;
	width: 100%;
	color: var(--secondary-text-color);
`;

const RickAndMorty = () => {
	return <StyledRickAndMorty>Rick And Morty</StyledRickAndMorty>;
};

export default RickAndMorty;
