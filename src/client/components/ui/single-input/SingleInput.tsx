"use client"

import React, {ChangeEvent, useState} from 'react';
import styles from './SingleInput.module.scss'
import Icons from "../icons/Icons";

interface ISingleInput {
	onSubmit?: () => Promise<Boolean>
	validationRegExp?: RegExp
}

const SingleInput: React.FC<ISingleInput> = ({ onSubmit, validationRegExp }) => {

	const [inputValue, setInputValue] = useState<string>('')

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsError(false)
		setIsSuccess(false)
		setInputValue(e.target.value)
	}

	const reset = () => {
		setInputValue('')
		setIsError(false)
	}

	const onEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			send()
		}
	}

	const send = async () => {
		if (inputValue === '')
			return

		if (validationRegExp) {
			const result = validate(inputValue)
			if (!result) {
				setIsError(true)
				return
			}
		}

		if (onSubmit) {
			setIsLoading(true)

			const result = await onSubmit()
			if (!result) {
				setIsError(true)
			} else {
				setIsSuccess(true)
			}

			setIsLoading(false)
		}
	}

	const validate = (string: string) => {
		const result = string.match(validationRegExp!)
		setIsError(false)
		if (!result) {
			setIsError(true)
			return false
		}
		return true
	}

	const [isError, setIsError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isSuccess, setIsSuccess] = useState<boolean>(false)

	return (
		<div className={[styles.singleInput,
			isError ? styles.singleInput_error : '',
			isSuccess ? styles.singleInput_success : ''].join(' ')}>
			<input className={'textCaption2'}
			       type={"email"}
			       placeholder={'Enter your email'}
			       value={inputValue}
			       onChange={onChange}
			       disabled={isLoading}
			       onKeyDown={onEnterDown}
			/>
			{ isError
				? <button className={[styles.icon, styles.iconReset].join(' ')}
				          onClick={reset}>
					<Icons name={'close'} size={24} />
				</button>
				: null
			}
			<button className={[styles.icon, styles.iconSend].join(' ')} onClick={send}>
				{ (!isLoading && !isSuccess)
					? <Icons name={'arrow-right'} size={24} /> : null}
				{ isLoading
					? <Icons name={'loading'} size={24} /> : null }
				{ isSuccess
					? <Icons name={'check'} size={24} /> : null }
			</button>
		</div>
	);
};

export default SingleInput;