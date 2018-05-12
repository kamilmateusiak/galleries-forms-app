import * as React from 'react';
import styled from 'react-emotion';

const StyledButton = styled('button')`
	padding: 5px 10px;
	font-size: 14px;
	border: 1px solid #0A0A66;
	color: #0A0A66;
	outline: none;
	background-color: #fff;
	cursor: pointer;
	font-weight: 700;
	transition: all .25s ease-in-out;
	border-radius: 3px;
	&:hover, &:focus {
		color: #fff;
		background-color: #0A0A66;
		transition: all .25s ease-in-out;
	}
`;

interface InterfaceButtonProps {
	buttonType: string,
	children: React.ReactNode
}

const Button = ({children, buttonType}: InterfaceButtonProps) => {
	return (
		<StyledButton type={buttonType}>
			{children}
		</StyledButton>
	);
}

export default Button;