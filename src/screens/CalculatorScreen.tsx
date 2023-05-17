import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

	const {
		number,
		prevNumber,
		panResponder,
		clean,
		changeSign,
		btnAdd,
		btnSplit,
		btnSubtract,
		btnMultiply,
		btnPercentage,
		buildNumber,
		calculate,
	} = useCalculator()


	return (
		// <View style={styles.container}>
		<View style={styles.calculatorContainer}>
			<Text style={styles.smallResult}>
				{prevNumber}
			</Text>
			<Text 
				style={styles.result}
				numberOfLines={1}
				adjustsFontSizeToFit
			>
				{number}
			</Text>

			{/* Button Rows */}
			<View style={styles.row}>
				<ButtonCalc text="AC" bgColor='#9B9B9B' action={clean} />
				<ButtonCalc text="+/-" bgColor='#9B9B9B' action={changeSign} />
				<ButtonCalc text="%" bgColor='#9B9B9B' action={btnPercentage} /> 
				<ButtonCalc text="/" bgColor='#FF9427' action={btnSplit} />
			</View>
      
			<View style={styles.row}>
				<ButtonCalc text="7" action={buildNumber} />
				<ButtonCalc text="8" action={buildNumber} />
				<ButtonCalc text="9" action={buildNumber} />
				<ButtonCalc text="X" bgColor='#FF9427' action={btnMultiply} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="4" action={buildNumber} />
				<ButtonCalc text="5" action={buildNumber} />
				<ButtonCalc text="6" action={buildNumber} />
				<ButtonCalc text="-" bgColor='#FF9427' action={btnSubtract} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="1" action={buildNumber} />
				<ButtonCalc text="2" action={buildNumber} />
				<ButtonCalc text="3" action={buildNumber} />
				<ButtonCalc text="+" bgColor='#FF9427' action={btnAdd} />
			</View>

			<View style={styles.row}>
				<ButtonCalc text="0" width action={buildNumber} />
				<ButtonCalc text="," action={buildNumber} />
				<ButtonCalc text="=" bgColor='#FF9427' action={calculate} />
			</View>

		</View>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// })
