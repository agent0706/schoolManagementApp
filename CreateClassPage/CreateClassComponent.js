import React, {Component} from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';
import GestureRecogniser from 'react-native-swipe-gestures';
import {CreateClassPageConsts} from '../Consts';
import CreatePageHeaderView from '../CommonComponents/CreatePageHeaderView';
import Box from '../CommonComponents/Box';

class CreateClassComponent extends Component {
	
	onRightSwipe = () => {
		this.props.navigation.toggleDrawer();
	};
	
	render () {
		return (
		<View style={{flex: 1, backgroundColor: '#fff'}} >
			<GestureRecogniser 
				onSwipeRight={this.props.navigation.toggleDrawer} 
				style={{flexGrow: 1, backgroundColor: '#fff'}}
			>
				<CreatePageHeaderView pageNameLabel={CreateClassPageConsts.HeaderLabel} />
				<Box flexValue={8} borderWidth={5} borderRadius={10} padding={0} borderColor='green'>
					<ScrollView>
						<Text>Ajay</Text>
					</ScrollView>
				</Box>
			</GestureRecogniser>
		</View>
		);
	};
};

export default CreateClassComponent;