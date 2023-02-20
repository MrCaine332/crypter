import React, {useState} from 'react';
import styles from './Filter.module.scss'
import Select from "../../../ui/select/Select";
import AppButton from "../../../ui/button-link/app-button/AppButton";
import Categories from "./categories/Categories";
import Divider from "../../../ui/divider/Divider";

const timespanItems = [
	{ value: 'recentlyAdded', label: 'Recently Added'},
	{ value: 'days7', label: '7 days'},
	{ value: 'days14', label: '14 days'},
	{ value: 'months1', label: '1 month'},
	{ value: 'months3', label: '3 month'},
	{ value: 'months6', label: '6 month'},
]

const Filter = () => {

	const [timespanSelectedValue, setTimespanSelectedValue] = useState<string | number>('')

	return (
		<div className={styles.filter}>
			<div className={styles.filterTop}>
				<div className={styles.selectContainer}>
					<Select label={'Timespan'}
					        options={timespanItems}
					        defaultOptionValue={'recentlyAdded'}
					        selectedOptionValue={timespanSelectedValue}
					        onSelectChange={(value) => setTimespanSelectedValue(value)}
					        withClearButton
					/>
				</div>
				<Categories />
				<div className={styles.btnContainer}>
					<AppButton style={"filled"}>
						Reset
					</AppButton>
				</div>
			</div>
			<Divider direction={"horizontal"} />
			<div className={styles.filterBottom}>
				<div className={styles.filterItem}>
					<Select />
				</div>
				<div className={styles.filterItem}>
					<Select />
				</div>
				<div className={styles.filterItem}>
					<Select />
				</div>
				<div className={styles.filterItem}>
					<Select />
				</div>
			</div>
		</div>
	);
};

export default Filter;