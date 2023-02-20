"use client"

import React from 'react';
import styles from './Feed.module.scss'
import LatestUploads from "./latest-uploads/LatestUploads";
import FeaturedItem from "./featured-item/FeaturedItem";
import Divider from "../../ui/divider/Divider";
import ItemList from "./item-list/ItemList";
import ComponentContainer from "../../component-container/ComponentContainer";

const Feed = () => {
	return (
		<ComponentContainer>
			<div className={styles.feed}>
				<FeaturedItem />
				<ItemList />
				<Divider direction={"vertical"} />
				<LatestUploads />
			</div>
		</ComponentContainer>
	);
};

export default Feed;