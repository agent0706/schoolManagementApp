import React from 'react';
import {
	View,
	Text
} from 'react-native';
import HeaderMenuIconView from './HeaderMenuIconView';

const EmptyView = ({getActiveTabName}) => {
	return (
		<View 
			style={{flex: 1, 
			alignItems: 'center',
			justifyContent: 'center'
			}}
		>
			<Text>Looks like {getActiveTabName()} list is empty</Text>
		</View>
	);
	
};

export default EmptyView