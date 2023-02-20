import React from 'react';
import styles from './ItemList.module.scss'
import Image from "next/image";
import ImageHover from "../../../ui/image-hover/ImageHover";
import Bid from "../../../ui/bid/Bid";
import AppButton from "../../../ui/button-link/app-button/AppButton";

import itemImage1 from "../../../../../../public/images/paintings/paintingWaves.jpg";
import itemImage2 from "../../../../../../public/images/paintings/paintingCircles.jpg";
import itemImage3 from "../../../../../../public/images/paintings/paintingRaindrops.jpg";

import avatar1 from "../../../../../../public/images/avatars/avatar1.png";
import avatar3 from "../../../../../../public/images/avatars/avatar3.png";
import avatar4 from "../../../../../../public/images/avatars/avatar4.png";


import FeedItem from "./feed-item/FeedItem";

export interface IListItem {
	previewImage?: any
	avatarImage?: any
	label: string
	highestBid: number
	numberOfCopies: number
}

const items: IListItem[] = [
	{previewImage: itemImage1, avatarImage: avatar1, label: 'ETH never die',
		highestBid: 0.27, numberOfCopies: 12 },
	{previewImage: itemImage2, avatarImage: avatar3, label: 'Future coming soon',
		highestBid: 1.12, numberOfCopies: 3 },
	{previewImage: itemImage3, avatarImage: avatar4, label: 'Elon Musk silver coin 3d print',
		highestBid: 0.13, numberOfCopies: 47 },
]


const ItemList = () => {
	return (
		<div className={styles.itemList}>
			{ items.map((item, index) => (
				<FeedItem key={index} item={item} />
			))}
		</div>
	);
};

export default ItemList;