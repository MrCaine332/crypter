import React, {ReactNode} from 'react';

interface IComponentContainer {
	children?: ReactNode
	className?: string
}

const ComponentContainer: React.FC<IComponentContainer> = ({ children, className }) => {
	return (
		<div className={className}>
			<div className="container">
				{ children }
			</div>
		</div>
	);
};

export default ComponentContainer;