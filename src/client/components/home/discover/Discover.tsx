import React, {useState} from 'react';
import ComponentContainer from "../../component-container/ComponentContainer";
import styles from './Discover.module.scss'
import Filter from "./filter/Filter";
import Results from "./results/Results";
import AppButton from "../../ui/button-link/app-button/AppButton";
import Icons from "../../ui/icons/Icons";

const Discover = () => {

	const [testA, setTestA] = useState(false)
	const test = () => {
		setTestA(true)
		setTimeout(() => {
			setTestA(false)
		}, 2000)
	}

	return (
		<ComponentContainer>
			<div className={styles.discover}>
				<div className={styles.header}>
					<p className="headline3">Discover</p>
				</div>
				<Filter />
				<Results />
				<div className={styles.loadMore}>
					<AppButton style={"outlined"} onClick={test}>
						Load More
						{
							testA && <Icons name={'loading'} size={16} />
						}
					</AppButton>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default Discover;