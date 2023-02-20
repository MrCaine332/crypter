"use client"

import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import styles from './Select.module.scss'
import Icons from "../icons/Icons";

interface ISelect {
	options?: { value: string | number, label: string }[]
	label?: string
	withClearButton?: boolean
	defaultOptionValue?: string | number
	selectedOptionValue?: string | number
	onSelectChange?: (value: string | number) => void

}


const Select: React.FC<ISelect> = (
	{
		options,
		label,
		withClearButton,
		defaultOptionValue,
		selectedOptionValue,
		onSelectChange
	}) => {

	const [isOpened, setIsOpened] = useState<boolean>(false)

	const selectRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const listener = (e: any) => {
			if (!selectRef.current?.contains(e.target)) {
				setIsOpened(false)
			}
		}

		document.addEventListener('click', listener)
		return () => {
			document.removeEventListener('click', listener)
		}
	}, [])

	useEffect(() => {
		if (defaultOptionValue && onSelectChange) {
			onSelectChange(defaultOptionValue)
		}
	}, [])

	const onHeaderClick = () => {
		setIsOpened(prevState => !prevState)
	}

	const onClearClick = (e: any) => {
		e.preventDefault()
		e.stopPropagation()

		if (onSelectChange)
			onSelectChange(defaultOptionValue || '')
	}

	const onOptionClick = (optionValue: string | number) => {
		if (onSelectChange)
			onSelectChange(optionValue)
		setIsOpened(false)
	}

	return (
		<div className={styles.select} ref={selectRef} tabIndex={0}>
			<div className={styles.selectHeader} onClick={onHeaderClick}>
				<p className="textCaptionBold">
					{ selectedOptionValue
						? options?.find((option) => option?.value === selectedOptionValue)?.label
						: defaultOptionValue
							? options?.find((option) => option?.value === defaultOptionValue)?.label
							: label }
				</p>
				<div className={styles.buttons}>
					{ withClearButton && selectedOptionValue && defaultOptionValue !== selectedOptionValue
						?   <button onClick={onClearClick}>
							<Icons name={'close'} size={18} />
						</button>
						: null}
					<div className={[styles.arrowContainer,
						isOpened ? styles.arrowContainer_opened : ''].join(' ')}>
						<Icons name={'arrow-right-simple'} size={24} />
					</div>
				</div>
			</div>
			<div className={[styles.selectOptions, isOpened && styles.selectOptions_opened].join(' ')}>
				{ options?.map((option) =>
					<div key={option.value}
					     className={styles.option}
					     onClick={() => onOptionClick(option.value)}>
						{ option.label }
					</div>) }
			</div>
		</div>
	);
};

export default Select;