import React from 'react';
import styles from './CreatorCard.module.scss'
import Icons from "../../../ui/icons/Icons";
import Divider from "../../../ui/divider/Divider";

const CreatorCard = () => {
	return (
		<div className={styles.creatorCardWrap}>
			<div className={styles.creatorCard}>
				<div className={styles.cardHeader}>
					<div className={styles.badge}>

					</div>
					<div className={styles.icons}>
						<div className={[styles.icon].join(' ')}>
							<Icons name={'plus-square'} size={24} />
						</div>
						<div className={[styles.icon, styles.iconExpand].join(' ')}>
							<Icons name={'arrow-right'} size={24} />
						</div>
					</div>
				</div>
				<Divider />
				<div className={styles.creatorInfo}>
					<div className={styles.avatar}>

					</div>
					<div className={styles.details}>
						<p className={'textCaptionBold'}>Odell Hane</p>
						<p className={'textCaption2Bold'}>2.456 <span className={'textCaption2'}>ETH</span></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatorCard;