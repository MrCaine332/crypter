import React, {useState} from 'react';
import styles from './Categories.module.scss'
import AppButton from "../../../../ui/button-link/app-button/AppButton";

const categories = ['All Items', 'Art', 'Game', 'Photography', 'Music', 'Video']

const Categories = () => {

	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0)

	const onCategoryClick = (index: number) => {
		setSelectedCategoryIndex(index)
	}

	return (
		<div className={styles.categories}>
			{ categories.map((category, index) => (
				<div key={index} className={[styles.btnContainer,
					selectedCategoryIndex === index ? styles.btnContainer_selected : null].join(' ')}>
					<AppButton onClick={() => onCategoryClick(index)}>{ category }</AppButton>
				</div>
			)) }
		</div>
	);
};

export default Categories;