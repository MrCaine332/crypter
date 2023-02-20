import React from 'react';
import styles from './Footer.module.scss'
import Logo from "../ui/logo/Logo";
import AppLink from "../ui/button-link/app-link/AppLink";
import SingleInput from "../ui/single-input/SingleInput";

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const Footer = () => {

	const asyncRequest = async () => {
		try {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve('resolved')
				}, 1000)
			})

			return true
		} catch (e) {
			return false
		}
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent + ' container'}>
				<div className={styles.logo}>
					<Logo/>
					<p className={styles.title}>
						The New Creative<br/>Economy.
					</p>
				</div>
				<div className={styles.info1}>
					<p className="textBody2Bold">Crypter.</p>
					<div className={styles.body}>
						<AppLink href={'/'} small>How it works</AppLink>
						<AppLink href={'/'} small>Discover</AppLink>
						<AppLink href={'/'} small>Create account</AppLink>
					</div>
				</div>
				<div className={styles.info2}>
					<p className="textBody2Bold">Info</p>
					<div className={styles.body}>
						<AppLink href={'/'} small>Download</AppLink>
						<AppLink href={'/'} small>Demos</AppLink>
						<AppLink href={'/'} small>Support</AppLink>
					</div>
				</div>
				<div className={styles.mailing}>
					<p className="textBody2Bold">Join Newsletter</p>
					<div className={styles.body}>
						<p className="textCaption">Subscribe our newsletter to get more free design course and
							resource</p>
					</div>
					<SingleInput onSubmit={asyncRequest} validationRegExp={emailRegExp}/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;