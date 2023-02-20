import React from 'react';
import Image from "next/image";
import featuredImage from "../../../../../../../public/images/img 46.jpg";
import ImageHover from "../../../../ui/image-hover/ImageHover";
import Bid from "../../../../ui/bid/Bid";
import AppButton from "../../../../ui/button-link/app-button/AppButton";

import styles from './FeedItem.module.scss'
import {IListItem} from "../ItemList";
import Link from "next/link";

interface IFeedItem {
	item: IListItem
}

const FeedItem: React.FC<IFeedItem> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Link href={''} className={styles.itemImageContainer}>
				<Image src={item.previewImage} alt=""/>
				<ImageHover />
			</Link>
			<div className={styles.itemInfo}>
				<p className="textBody2Bold">{item.label}</p>
				<div className={styles.general}>
					<div className={styles.avatar}></div>
					<Bid>{item.highestBid} ETH</Bid>
					<p className={styles.count + ' textCaption'}>1 of {item.numberOfCopies}</p>
				</div>
				<div className={styles.infoBtn}>
					<AppButton style={"outlined"} small>Place a Bid</AppButton>
				</div>
			</div>
		</div>
	);
};

export default FeedItem;