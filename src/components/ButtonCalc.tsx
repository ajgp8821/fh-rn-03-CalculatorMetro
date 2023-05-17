import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
  text: string,
  bgColor?: string,
  width?: boolean,
  action: (action: string) => void
}

export const ButtonCalc = ({text, bgColor = '#2D2D2D', width = false, action}: Props) => {
	return (
		<TouchableOpacity
			onPress={() =>action(text)}
		>
			<View style={{
				...styles.btn,
				backgroundColor:bgColor,
				width: (width) ? 180 : 80
			}}>
				<Text style={{
					...styles.textBtn,
					color: (bgColor === '#9B9B9B') ? 'black' : 'white'
				}}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}
