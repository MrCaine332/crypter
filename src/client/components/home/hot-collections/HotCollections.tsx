import React from 'react';
import ComponentContainer from "../../component-container/ComponentContainer";
import styles from './HotCollections.module.scss'
import MediaItem from "../hot-bid/media-item/MediaItem";
import CollectionItem from "./collection-item/CollectionItem";

const HotCollections = () => {
	return (
		<ComponentContainer className={styles.background}>
			<div className={styles.hotCollections}>
				<div className={styles.header}>
					<p className="headline3">Hot collections</p>
				</div>
				<div className={styles.body}>
					<div className={styles.collectionItems}>
						<CollectionItem />
						<CollectionItem />
						<CollectionItem />
					</div>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default HotCollections;