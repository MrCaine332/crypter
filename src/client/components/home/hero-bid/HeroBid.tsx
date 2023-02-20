
import React from 'react';
import styles from './HeroBid.module.scss'
import AppButton from "../../ui/button-link/app-button/AppButton";
import AppLink from "../../ui/button-link/app-link/AppLink";

import Image from "next/image";
import ComponentContainer from "../../component-container/ComponentContainer";
import Avatar from "../../ui/avatar/Avatar";

import bidImage from '../../../../../public/images/img_103.jpg'
import avatar1 from '../../../../../public/images/avatars/avatar1.png'

const HeroBid = () => {
	return (
		<ComponentContainer>
			<div className={styles.heroBid}>
				<div className={styles.bidImage}>
					<Image src={bidImage} alt=""/>
				</div>
				<div className={styles.bidInfo}>
					<h1 className='headline1'>
						Marco carrillo
					</h1>
					<div className={styles.creatorAndPrice}>
						<div className={styles.item}>
							<Avatar size={40} image={avatar1} />
							<div className={styles.itemText}>
								<p className={styles.itemTextCaption + ' textCaption2'}>Creator</p>
								<p className="textCaptionBold">Enrico Cole</p>
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.abstract}></div>
							<div className={styles.itemText}>
								<p className={styles.itemTextCaption + ' textCaption2'}>Instant price</p>
								<p className="textCaptionBold">3.5 ETH</p>
							</div>
						</div>
					</div>
					<div className={styles.auctionInfo}>
						<div className={styles.auctionInfoHead}>
							<p className="textBody2Bold">Current Bid</p>
							<h2 className="headline2">1.00 ETH</h2>
							<p className="textBodyBold">$3,618.36</p>
						</div>
						<div className={styles.auctionInfoTime}>
							<p className="textBody2Bold">Auction ending in</p>
							<div className={styles.auctionInfoTimer}>
								<div className={styles.timerItem}>
									<h4 className="headline4">19</h4>
									<p className="textBody2Bold">Hrs</p>
								</div>
								<div className={styles.timerItem}>
									<h4 className="headline4">24</h4>
									<p className="textBody2Bold">mins</p>
								</div>
								<div className={styles.timerItem}>
									<h4 className="headline4">19</h4>
									<p className="textBody2Bold">secs</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.buttons}>
						<AppButton style={"filled"} onClick={() => { console.log(55)}}>Place a bid</AppButton>
						<AppLink style={"outlined"}>View item</AppLink>
					</div>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default HeroBid;