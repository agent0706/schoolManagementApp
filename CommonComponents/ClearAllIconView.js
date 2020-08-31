import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClearAllIconView  = ({onClearButtonClick, parameter, backGroundColor = '#fff', iconColor = 'red'}) => {
	return (
		<Icon.Button 
			name='close' 
			size={20} 
			backgroundColor={backGroundColor}
			color={iconColor}
			onPress={() => onClearButtonClick(parameter)}
			style={{flex: 1, paddingLeft: 15}}
		/>
	);
};

export default ClearAllIconView;