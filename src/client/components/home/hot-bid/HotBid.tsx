import React from 'react';
import ComponentContainer from "../../component-container/ComponentContainer";
import styles from './HotBid.module.scss'
import MediaItem from "./media-item/MediaItem";

const HotBid = () => {
	return (
		<ComponentContainer>
			<div className={styles.hotBid}>
				<div className={styles.header}>
					<p className="headline3">Hot bid</p>
				</div>
				<div className={styles.body}>
					<div className={styles.mediaItems}>
						<MediaItem />
						<MediaItem />
						<MediaItem />
						<MediaItem />
					</div>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default HotBid;