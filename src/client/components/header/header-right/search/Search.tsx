"use client"

import React, {useState} from 'react';
import styles from './Search.module.scss'
import Icons from "../../../ui/icons/Icons";

const Search: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
	const [searchString, setSearchString] = useState<string>('')

	return (
		<div className={[styles.search, mobile ? styles.search_mobile : ''].join(' ')}>
			<input className={'textCaption2'} placeholder={'Search'} onChange={e => setSearchString(e.target.value)} />
			<div className={[styles.searchIcon, !!searchString ? styles.searchIcon_notEmpty : ''].join(' ')}>
				<Icons name={'search'} size={18} />
			</div>
		</div>
	);
};

export default Search;