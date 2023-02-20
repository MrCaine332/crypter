import React from 'react';
import MenuDropdownNavbar from "../navbar/MenuDropdownNavbar";

const MenuDropdownNotAuthenticated = () => {
	return (
		<>
			<MenuDropdownNavbar isAuthenticated={false} />
		</>
	);
};

export default MenuDropdownNotAuthenticated;