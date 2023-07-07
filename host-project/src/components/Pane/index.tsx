import React, { ReactNode, FC } from "react";
import styled from "styled-components";

const StyledPane = styled.div`
	border: var(--primary-color);
	background-color: var(--primary-color);
	box-shadow: 0.15rem 0.15rem 0.75rem rgba(0, 0, 0, 0.2);
	border-radius: 0.25rem;
	height: fit-content;
	max-height: calc(100vh - 11.25rem);
	overflow-y: auto;
`;

interface PaneProps {
	children: ReactNode | ReactNode[];
	className?: string;
}

const Pane: FC<PaneProps> = ({ children, className = "" }) => {
	return <StyledPane className={className}>{children}</StyledPane>;
};

export default Pane;
