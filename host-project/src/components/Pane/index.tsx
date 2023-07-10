import React, { ReactNode, FC } from "react";
import styled from "styled-components";

const StyledPane = styled.div`
	border: var(--primary-color);
	background-color: var(--primary-color);
	box-shadow: 0.15rem 0.15rem 0.75rem rgba(0, 0, 0, 0.2);
	border-radius: 0.25rem;
	height: fit-content;

	.pane__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.pane__body {
		overflow-y: auto;
	}
`;

interface PaneProps {
	children: ReactNode | ReactNode[];
	className?: string;
	header?: ReactNode;
}

const Pane: FC<PaneProps> = ({ children, className = "", header = null }) => {
	return (
		<StyledPane>
			{header && <div className="pane__header">{header}</div>}
			<div className={`pane__body ${className}`}>{children}</div>
		</StyledPane>
	);
};

export default Pane;
