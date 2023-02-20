import React from 'react';
import MenuDropdownHeader from "./header/MenuDropdownHeader";
import MenuDropdownBalance from "./balance/MenuDropdownBalance";
import MenuDropdownNavbar from "../navbar/MenuDropdownNavbar";

const MenuDropdownAuthenticated = () => {
	return (
		<>
			<MenuDropdownHeader />
			<MenuDropdownBalance />
			<MenuDropdownNavbar isAuthenticated={true} />
		</>
	);
};

export default MenuDropdownAuthenticated;