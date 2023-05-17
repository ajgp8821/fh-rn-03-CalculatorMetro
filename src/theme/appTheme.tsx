import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	calculatorContainer: {
		flex:1,
		paddingHorizontal: 20,
		// backgroundColor: 'red',
		justifyContent: 'flex-end'
	},
	result: {
		color: 'white',
		fontSize: 60,
		textAlign: 'right',
		marginBottom: 10
	},
	smallResult: {
		color: 'rgba(255, 255, 255, 0.5)',
		fontSize: 30,
		textAlign: 'right'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 18,
		paddingHorizontal: 10
	},
	btn: {
		height: 80,
		width: 80,
		// backgroundColor: '#9B9B9B',
		backgroundColor: '#2D2D2D',
		borderRadius: 100,
		justifyContent: 'center',
		marginHorizontal: 10
	},
	textBtn: {
		textAlign: 'center',
		padding: 10,
		fontSize: 30,
		color: 'white',
		fontWeight: '300'
	}
})
