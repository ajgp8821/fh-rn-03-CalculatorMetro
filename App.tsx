import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen'
import { styles } from './src/theme/appTheme'

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar 
				backgroundColor='black'
				barStyle='light-content'
			/>
			<CalculatorScreen />
		</SafeAreaView>
	)
}
