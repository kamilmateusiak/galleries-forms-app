import * as React from 'react';
import styled from 'react-emotion';

const Label = styled('label')`
	display: flex;
	flex-wrap: wrap;
	margin: 10px 0;
`;

const Text = styled('div')`
	width: 30%;
	font-size: 0.75rem;
	line-height: 1rem;
	text-align: left;
`;

const Field = styled('div')`
	width: 70%;
	& > * {
		width: 100%;
	}
`;

interface InterfaceFieldWrapperProps {
	text: string,
	children: React.ReactNode,
	id: string
}

const FieldWrapper = ({text, children, id}: InterfaceFieldWrapperProps) => {
	return (
		<Label htmlFor={id}>
			<Text>{text}</Text>
			<Field>{children}</Field>
		</Label>
	);
}

export default FieldWrapper;