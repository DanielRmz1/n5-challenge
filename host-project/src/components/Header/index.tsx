import React, { FC } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--secondary-color);
	width: 100%;

	.header__title {
		font-size: 2.5rem;
		color: var(--primary-color);
	}
`;

const Header: FC = () => (
	<StyledHeader>
		<h1 className="header__title">N5 Challenge</h1>
	</StyledHeader>
);

export default Header;
