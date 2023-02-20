import React from 'react';
import styles from './Results.module.scss'
import MediaItem from "../../hot-bid/media-item/MediaItem";

const Results = () => {
	return (
		<div className={styles.results}>
			<MediaItem />
			<MediaItem />
			<MediaItem />
			<MediaItem />
			<MediaItem />
			<MediaItem />
			<MediaItem />
			<MediaItem />
		</div>
	);
};

export default Results;