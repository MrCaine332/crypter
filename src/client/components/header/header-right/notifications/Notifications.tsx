"use client"

import React, {useRef, useState} from 'react';
import styles from './Notifications.module.scss'
import Icons from "../../../ui/icons/Icons";
import Toggler from "../../../ui/toggler/Toggler";
import MenuDropdown from "../menu/menu-dropdown/MenuDropdown";
import Dropdown from "../../../ui/dropdown/Dropdown";

const Notifications = () => {

	const dropdownRef = useRef<HTMLDivElement>(null)

	const [isToggled, setIsToggled] = useState(false)

	return (
		<div className={styles.notifications}>
			<Toggler isToggled={isToggled}
			         setIsToggled={setIsToggled}
			         withOutsideClick={true}
			         refFor={dropdownRef}
			>
				<div className={styles.bell}>
					<Icons name={'bell'} size={24} />
				</div>
			</Toggler>

			<Dropdown isToggled={isToggled} dropdownRef={dropdownRef}>
				{/*<MenuDropdown />*/}
			</Dropdown>
		</div>
	);
};

export default Notifications;