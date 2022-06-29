import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = (value = 1, upperLimit = 100) => {
		if (upperLimit && counter + value > upperLimit) return;
		setCounter((current) => current + value);
	};

	const decrement = (value = 1, lowerLimit = 0) => {
		if (counter > lowerLimit) {
			setCounter((current) => current - value);
		}

		if (counter - value < lowerLimit) {
			setCounter(lowerLimit);
		}
	};

	const reset = () => {
		setCounter(initialValue);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
