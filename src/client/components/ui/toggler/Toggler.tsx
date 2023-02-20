"use client"

import React, {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import styles from './Toggler.module.scss'

interface IToggler {
	isToggled: boolean
	setIsToggled: Dispatch<SetStateAction<boolean>>
	withOutsideClick?: boolean
	refFor?: React.RefObject<HTMLDivElement>
	children?: React.ReactNode
}

const Toggler: React.FC<IToggler>
	= ({ children,
		   isToggled,
		   setIsToggled,
		   refFor,
		   withOutsideClick
	}) => {

	const buttonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (withOutsideClick) {
			const listener = (e: any) => {
				if (!buttonRef.current?.contains(e.target)
					&& !refFor?.current?.contains(e.target)) {
					setIsToggled(false)
				}
			}

			document.addEventListener('click', listener)
			return () => {
				document.removeEventListener('click', listener)
			}
		}
	}, [])

	return (
		<button onClick={() => {setIsToggled(!isToggled)}}
		        ref={buttonRef}
		        className={styles.toggler}
		>
			{ children }
		</button>
	);
};

export default Toggler;