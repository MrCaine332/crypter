import React from 'react';
import styles from './CollectionItem.module.scss'
import Image from "next/image";
import img from '../../../../../../public/images/img 46.jpg'

const CollectionItem = () => {
	return (
		<div className={styles.collectionItem}>
			<div className={styles.collectionItemImageStack}>
				<div className={styles.imageBig}>
					<Image src={img} alt={''} />
				</div>
				<div className={styles.subImages}>
					<div className={styles.imageSmall}><Image src={img} alt={''} /></div>
					<div className={styles.imageSmall}><Image src={img} alt={''} /></div>
					<div className={styles.imageSmall}><Image src={img} alt={''} /></div>
				</div>
			</div>
			<div className={styles.collectionItemInfo}>
				<p className={'textBodyBold'}>Awesome collection</p>
				<div className={styles.general}>
					<div className={styles.user}>
						<div className={styles.avatar}></div>
						<p className="textCaption">By <span className={'textCaptionBold'}>Kennith Olson</span></p>
					</div>
					<div className={styles.itemsNum + ' hairlineSmall'}>
						28 ITEMS
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollectionItem;