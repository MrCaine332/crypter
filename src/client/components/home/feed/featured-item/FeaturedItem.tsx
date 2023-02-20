import React from 'react';
import styles from './FeaturedItem.module.scss'
import Image from "next/image";
import featuredImage from '../../../../../../public/images/paintings/paintingBird.jpg'
import Bid from "../../../ui/bid/Bid";
import ImageHover from "../../../ui/image-hover/ImageHover";
import Link from "next/link";
import Avatar from "../../../ui/avatar/Avatar";

import avatar2 from '../../../../../../public/images/avatars/avatar2.png'

const FeaturedItem = () => {
	return (
		<div className={styles.featuredItemContainer}>
			<div className={styles.featuredItem}>
				<Link href={''}>
					<div className={styles.itemImageContainer}>
						<Image src={featuredImage} alt=""/>
						<ImageHover />
					</div>
				</Link>
				<div className={styles.itemInfo}>
					<div className={styles.itemInfoGeneral}>
						<Link href={''} className={styles.itemInfoAvatar}>
							<Avatar image={avatar2} />
						</Link>
						<div className={styles.itemInfoTitle}>
							<p className="textBodyBold">The future of ETH</p>
							<p className="textCaptionBold">18 in stock</p>
						</div>
					</div>
					<div className={styles.itemInfoBid}>
						<p className={styles.caption + " textCaption2"}>Highest bid</p>
						<Bid>
							1.125 ETH
						</Bid>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;