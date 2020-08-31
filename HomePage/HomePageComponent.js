import React, {Component} from 'react';
import {
	View,
	Text
} from 'react-native';
import HeaderSearchBoxView from './HeaderSearchBoxView';
import Tabs from '../CommonComponents/Tabs';
import {TabsContent, SearchBarLabels} from '../Consts';
import {Swipeable} from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import StudentComponent from './Student/StudentComponent';
import StaffComponent from './Staff/StaffComponent';
import ClassComponent from './Class/ClassComponent';

class HeaderComponent extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			activeTabId: 1,
			isDrawerOpen: false
		};
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
		this.onSearchBoxClearButtonClick = this.onSearchBoxClearButtonClick.bind(this);
		this.getHeaderSearchBoxProps = this.getHeaderSearchBoxProps.bind(this);
	};
	
	onSearchTextChange(text) {
		this.setState({
			searchText: text
		});
	}
	
	onSearchBoxClearButtonClick() {
		this.setState({
			searchText: ''
		});
	};
	
	updateActiveTabId = (id) => {
		this.setState({
			activeTabId: id
		});
	};
	
	getActiveTabName = () => {
		switch(this.state.activeTabId){
			case 1: return SearchBarLabels.CLASSES
			break;
			case 2: return SearchBarLabels.STUDENTS
			break;
			case 3: return SearchBarLabels.STAFF
			break;
			default: ''
		}
	};

	toggleDrawer = () => {
		this.props.navigation.toggleDrawer();
	};
	
	getHeaderSearchBoxProps() {
		const {searchText, activeTabId} = this.state;
		return {
			searchText,
			onSearchTextChange: this.onSearchTextChange,
			onSearchBoxClearButtonClick: this.onSearchBoxClearButtonClick,
			activeTabId,
			getActiveTabName: this.getActiveTabName,
			toggleDrawer: this.toggleDrawer
		};
	};
	
	rightSwipeAction = () => {
		const {activeTabId} = this.state;
		if (activeTabId === 1) {
			this.toggleDrawer();
		} else {
			this.updateActiveTabId(activeTabId - 1)
		}
	};
	
	leftSwipeAction = () => {
		const {activeTabId} = this.state;
		if (activeTabId < TabsContent.length) {
			this.updateActiveTabId(activeTabId + 1);
		}
	};
	
	getCurrentTabView = () => {
		const {activeTabId} = this.state;
		switch (activeTabId) {
			case 1: return <StudentComponent getActiveTabName={this.getActiveTabName} />;
			break;
			case 2: return <ClassComponent getActiveTabName={this.getActiveTabName} />;
			break;
			case 3: return <StaffComponent getActiveTabName={this.getActiveTabName} />;
			break;
			default: return null;
		}
	}
		
	render () {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<HeaderSearchBoxView {...this.getHeaderSearchBoxProps()} />
				<View paddingTop={10}> 
					<Tabs 
						tabsContent={TabsContent}
						updateActiveTab={this.updateActiveTabId}
						activeTab={this.state.activeTabId}
					/>
				</View>
				<View style={{borderWidth: 0.3, marginBottom: 20}} />
				<GestureRecognizer
					onSwipeLeft={this.leftSwipeAction}
					onSwipeRight={this.rightSwipeAction}
					style={{flexGrow: 1, backgroundColor: '#fff'}}
				>
				{this.getCurrentTabView()}
				</GestureRecognizer>
			</View>
		);
	}
}

export default HeaderComponent;
