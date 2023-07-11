import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 10rem;
	min-width: 10rem;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 1rem;
`;

const StyledLoader = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	border: 8px solid;
	border-color: var(--primary-color-200);
	border-right-color: var(--secondary-color);
	animation: s2 2s infinite linear;

	@keyframes s2 {
		to {
			transform: rotate(1turn);
		}
	}
`;

const Loader = () => (
	<Container>
		<StyledLoader data-testid="loader" />
	</Container>
);

export default Loader;
