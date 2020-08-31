import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderMenuIconView  = ({toggleDrawer}) => {
	return (
		<Icon.Button 
			name='menu' 
			size={20} 
			backgroundColor='#fff'
			color='green'
			onPress={toggleDrawer}
			style={{flex: 1, paddingLeft: 15}}
		/>
	);
};

export default HeaderMenuIconView;