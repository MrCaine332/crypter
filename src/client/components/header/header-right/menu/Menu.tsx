"use client"

import React, {useEffect, useRef, useState} from 'react';
import styles from "./Menu.module.scss";
import MenuDropdown from "./menu-dropdown/MenuDropdown";
import MenuUser from "./menu-user/MenuUser";
import Toggler from "../../../ui/toggler/Toggler";
import Dropdown from "../../../ui/dropdown/Dropdown";

const Menu: React.FC<{ hamburgerOnly?: boolean }> = ({ hamburgerOnly = false}) => {

	const dropdownRef = useRef<HTMLDivElement>(null)

	const [isToggled, setIsToggled] = useState(false)

	return (
		<div className={[styles.menu, hamburgerOnly ? styles.menuHamburgerOnly : ''].join(' ')}>

			<Toggler isToggled={isToggled}
			         setIsToggled={setIsToggled}
			         withOutsideClick={true}
			         refFor={dropdownRef}
			>
				<div className={[styles.hamburger,
					isToggled ? styles.hamburger_opened : ''].join(' ')} />
				{ !hamburgerOnly
					? <div className={styles.menuUserWrap}>
						<MenuUser />
					</div>
					: null }
			</Toggler>

			<Dropdown isToggled={isToggled} dropdownRef={dropdownRef} >
				<MenuDropdown />
			</Dropdown>
		</div>
	);
};

export default Menu;