import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

const Box = ({
	children,
	backgroundColor = '#fff',
	borderRadius = 4,
	borderWidth = 0.5,
	borderColor = '#000',
	padding = 10,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	margin = 10,
	marginBottom,
	marginTop,
	marginLeft,
	marginRight,
	flexValue,
	height,
	width,
	style
}) => {
	const styles = StyleSheet.create({
		boxStyle: {
			backgroundColor,
			borderRadius,
			borderWidth,
			borderColor,
			margin,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			marginBottom,
			marginTop,
			marginRight,
			marginLeft,
			flex: flexValue && flexValue,
			height: height && height,
			width: width && width,
			...style
		}
	});
	
	return (
		<View style={styles.boxStyle}>
			{children}
		</View>
	);
	alert(styles);
};

export default Box;