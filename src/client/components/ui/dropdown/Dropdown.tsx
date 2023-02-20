import React from 'react';
import styles from './Dropdown.module.scss'

interface IDropdown {
	isToggled: boolean
	dropdownRef: React.RefObject<HTMLDivElement>
	className?: string
	children?: React.ReactNode
}

const Dropdown: React.FC<IDropdown> =
	({
		 isToggled,
		 dropdownRef,
		 className = '',
		 children
	}) => {
	return (
		<div className={[styles.dropdownWrap,
			isToggled ? styles.dropdownWrap_opened : '', className].join(' ')}
		     ref={dropdownRef}
		>
			{ children }
		</div>
	);
};

export default Dropdown;