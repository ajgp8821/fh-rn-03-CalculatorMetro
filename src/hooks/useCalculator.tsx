import React, { useRef, useState }from 'react'
import { PanResponder } from 'react-native'

enum Operators {
  add, subtract, multiply, split, percentage
}

export const useCalculator = () => {
	const [prevNumber, setPrevNumber] = useState('0')
	const [number, setNumber] = useState('0')
	const [isSwiping, setIsSwiping] = useState(false) // State variable to control execution

	const lastOperation = useRef<Operators>()

	const clean = () => {
		setNumber('0')
		setPrevNumber('0')
	}

	const buildNumber = (textNumber: string) => {

		// Do not accept double point
		if (number.includes(',') && textNumber === ',') return

		if (number.startsWith('0') || number.startsWith('-0')) {

			// Decimal point
			if (textNumber === ',') {
				setNumber(number + textNumber)
			}
			// Evaluate if it is another zero, and there is a point
			else if (textNumber === '0' && number.includes(',')) {
				setNumber(number + textNumber)
			}
			// Evaluate if it is different from zero, and does not have a point
			else if (textNumber !== '0' && !number.includes(',')) {
				setNumber(textNumber)
			}
			// Avoid 0.000
			else if (textNumber === '0' && !number.includes(',')) {
				setNumber(number)
			}
			else{
				setNumber(number + textNumber)
			}
		}
		else{
			setNumber(number + textNumber)
		}

	}

	const changeSign = () => {
		if (number.includes('-')) {
			setNumber(number.replace('-', ''))
		}
		else {
			setNumber('-' + number)
		}
	}
	
	const btnDelete = () => {
		
		if (number.length === 1 || (number.startsWith('-') && number.length === 2)) {
			setNumber('0')
		}
		else {
			setNumber(number.slice(0, -1))
		}
		// setNumber(String(Number(number.slice(0, -1)) /*|| 0*/))
	}

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderGrant: () => {
			// Touch gesture has started
			setIsSwiping(true)
		},
		onPanResponderMove: (event, gestureState) => {
			const { dx } = gestureState

			if (isSwiping) {
				// Only if the touch gesture is in progress
				if (dx > 0) {
					btnDelete()
				} else {
					btnDelete()
				}
				setIsSwiping(false)
			}
		}
	})

	const changeNum = () => {
		if (number.endsWith(',')) {
			setPrevNumber(number.slice(0, -1))
		}
		else {
			setPrevNumber(number)
		}
		setNumber('0')
	}

	const btnAdd = () => {
		changeNum()
		lastOperation.current = Operators.add
	}

	const btnSubtract = () => {
		changeNum()
		lastOperation.current = Operators.subtract
	}

	const btnMultiply = () => {
		changeNum()
		lastOperation.current = Operators.multiply
	}

	const btnSplit = () => {
		changeNum()
		lastOperation.current = Operators.split
	}

	const btnPercentage = () => {
		// changeNum()
		// lastOperation.current = Operators.percentage
		percent()
	}

	const percent = () => {
		// console.log('percent')
		// if (number.startsWith('0')) return

		// console.log('string', (number))
		let floatNum = Number(number.replace(/,/g, '.'))
		// console.log('float', floatNum)
		floatNum = floatNum / 100
		// console.log('floatN', floatNum)
		setNumber((floatNum.toString()).replace(/\./g, ','))
	}

	const calculate = () => {
		const num1 = Number(number.replace(/,/g, '.'))
		const num2 = Number(prevNumber.replace(/,/g, '.'))
		// console.log('num1', num1)
		// console.log('num2', num2)

		switch (lastOperation.current) {
		case Operators.add:
			setNumber(`${(num1 + num2).toFixed(10)}`.replace(/\./g, ',').replace(/0+$/, ''))
			break
		case Operators.subtract:
			setNumber(`${(num2 - num1).toFixed(10)}`.replace(/\./g, ',').replace(/0+$/, ''))
			break
		case Operators.multiply:
			setNumber(`${(num1 * num2).toFixed(10)}`.replace(/\./g, ',').replace(/0+$/, ''))
			break
		case Operators.split:
			setNumber(`${(num2 / num1).toFixed(10)}`.replace(/\./g, ',').replace(/0+$/, ''))
			break
		// case Operators.percentage:
		// 	percent()
		// 	break
		default:
			break
		}
		setPrevNumber('0')
		console.log('number', number)
    
	}

	return {
		number,
		prevNumber,
		panResponder,
		clean,
		changeSign,
		btnPercentage,
		btnSplit,
		buildNumber,
		btnMultiply,
		btnSubtract,
		btnAdd,
		calculate,
	}
}
