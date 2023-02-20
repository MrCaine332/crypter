import React from 'react';
import styles from './MediaItem.module.scss'
import Image from "next/image";
import img from '../../../../../../public/images/img_103.jpg'
import Divider from "../../../ui/divider/Divider";
import Bid from "../../../ui/bid/Bid";
import Icons from "../../../ui/icons/Icons";

const MediaItem = () => {
	return (
		<div className={styles.mediaItem}>
			<div className={styles.mediaItemImage}>
				<Image src={img} alt={''} />
			</div>
			<div className={styles.mediaItemInfo}>
				<div className={styles.title}>
					<p className="textBody2Bold">Amazing digital art</p>
					<Bid>2.45 ETH</Bid>
				</div>
				<div className={styles.owners}>
					<div className={styles.avatars}>
						<div className={styles.avatar}></div>
						<div className={styles.avatar + ' ' + styles.avatar2}></div>
						<div className={styles.avatar + ' ' + styles.avatar3}></div>
					</div>
					<p className="textCaptionBold">3 in stock</p>
				</div>
				<Divider />
				<div className={styles.bid}>
					<p className={'textCaption2'}>
						<Icons name={'candlesticks-up'} size={20}/>
						Highest bid
						<span className={'textCaption2Bold'}> 0.001 ETH</span>
					</p>
					<p className={'textCaption2'}>
						New bid 🔥
					</p>
				</div>
			</div>
		</div>
	);
};

// 🔥

export default MediaItem;