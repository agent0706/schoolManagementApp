import React from 'react';
import {
	View,
	Text
} from 'react-native';
import Box from './Box';
import {CreatePageConsts} from '../Consts';

const CreatePageHeaderView = ({pageNameLabel}) => {
	return (
		<Box borderWidth={5} borderRadius={10} borderColor='green' padding={0}>
			<View style={{alignItems: 'center'}}>
				<Text 
					style={{
						paddingTop: 10,
						paddingBottom: 10,
						fontWeight: 'bold',
						fontSize: 20
					}}
				>
					{CreatePageConsts.CreateLabel}  {pageNameLabel}
				</Text>
			</View>
		</Box>
	);
};

export default CreatePageHeaderView;