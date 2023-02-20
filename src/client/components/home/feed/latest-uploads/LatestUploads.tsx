import React from 'react';
import styles from './LatestUploads.module.scss'
import AppLink from "../../../ui/button-link/app-link/AppLink";
import Icons from "../../../ui/icons/Icons";

const LatestUploads = () => {
	return (
		<div className={styles.latestUploads}>
			<p className="textCaption2Bold">Latest upload from creators 🔥</p>

			<div className={styles.sliderContainer}>

				<div className={styles.users}>
					<div className={styles.user}>
						<div className={styles.avatar}></div>
						<div className={styles.text + ' textCaptionBold'}>
							<p>Payton Harris</p>
							<p>2.456 <span className="textCaption">ETH</span></p>
						</div>
					</div>
					<div className={styles.user}>
						<div className={styles.avatar}></div>
						<div className={styles.text + ' textCaptionBold'}>
							<p>Payton Harris</p>
							<p>2.456 <span className="textCaption">ETH</span></p>
						</div>
					</div>
					<div className={styles.user}>
						<div className={styles.avatar}></div>
						<div className={styles.text + ' textCaptionBold'}>
							<p>Payton Harris</p>
							<p>2.456 <span className="textCaption">ETH</span></p>
						</div>
					</div>
					<div className={styles.user}>
						<div className={styles.avatar}></div>
						<div className={styles.text + ' textCaptionBold'}>
							<p>Lorena Ledner</p>
							<p>2.456 <span className="textCaption">ETH</span></p>
						</div>
					</div>
					<div className={styles.user}>
						<AppLink style={"outlined"} small>
							Discover more <Icons name={'arrow-right'} size={16} />
						</AppLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestUploads;