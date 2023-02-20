"use client"

import React, {useState} from 'react';
import ComponentContainer from "../../component-container/ComponentContainer";
import styles from './TopCreators.module.scss'
import Select from "../../ui/select/Select";
import CreatorCard from "./creator-card/CreatorCard";

const TopCreators = () => {

	const [selectedOption, setSelectedOption] = useState<string | number>('')

	const onSelectChange = (value: string | number) => {
		// console.log(value)
		setSelectedOption(value)
	}

	return (
		<ComponentContainer className={styles.background}>
			<div className={styles.topCreators}>
				<div className={styles.header}>
					<div className={styles.title}>
						<p className={styles.subTitle + ' textBodyBold'}>Popular</p>
						<p className="headline3">Sellers</p>
					</div>

					<div className={styles.select}>
						<Select options={[
							{ value: 'option1', label: 'Aboba'},
							{ value: 'option2', label: 'Ebobo'},
						]}
								selectedOptionValue={selectedOption}
						        defaultOptionValue={'option1'}
						        onSelectChange={onSelectChange}
						        label={'Test label'}
						        withClearButton
						/>
					</div>
				</div>


				<div className={styles.creatorsWrap}>
					<div className={styles.creators}>
						<CreatorCard />
						<CreatorCard />
						<CreatorCard />
						<CreatorCard />
						<CreatorCard />
					</div>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default TopCreators;