import React, {ReactNode} from 'react';
import styles from './Bid.module.scss'

const Bid: React.FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.bid}>
			<p className="hairlineSmall">
				{ children }
			</p>
		</div>
	);
};

export default Bid;