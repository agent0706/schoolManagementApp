import React from 'react';
import {
	Text,
	View,
	TextInput
} from 'react-native';
import Box from '../CommonComponents/Box';
import ClearAllIconView from '../CommonComponents/ClearAllIconView';
import HeaderMenuIconView from './HeaderMenuIconView';
import {SearchBarLabels} from '../Consts';

const HeaderSearchBoxView = ({
	searchText,
	onSearchTextChange,
	onSearchBoxClearButtonClick,
	activeTabId,
	getActiveTabName,
	toggleDrawer
}) => {
	
	return (
		<Box borderWidth={5} borderRadius={10} padding={0} borderColor='green'>
			<View style={{
				flexDirection: 'row',
				alignItems: 'center'
			}}>
				<HeaderMenuIconView {...{toggleDrawer}} />
				<TextInput
					placeholder={`${SearchBarLabels.SEARCH} ${getActiveTabName()}`}
					onChangeText={text => onSearchTextChange(text)}
					defaultValue={searchText}
					style={{flex: 6}}
					size={30}
				/>
				{searchText !== '' && <ClearAllIconView onClearButtonClick={onSearchBoxClearButtonClick} />}
			</View>
		</Box>
	);
};

export default HeaderSearchBoxView;