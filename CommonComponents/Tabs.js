import React, {Component} from 'react';
import {
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	View
} from 'react-native';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state= {
			activeTabId: this.props.activeTab || this.props.tabsContent[0].id
		};
	};
	
	componentDidUpdate(prevProps) {
		if (prevProps.activeTab !== this.props.activeTab) {
			this.setState({
				activeTabId: this.props.activeTab
			});
		}
	};
	
	styles = StyleSheet.create({
			tabViewStyle: {
				flexDirection: 'row'
			},
			selectedTabTitleStyle: {
				color:'green',
				fontWeight: 'bold',
				fontSize: 15
			},
			normalTabTitleStyle: {
				fontSize: 13
			}
		});
	
	updateActiveTabId = (id) => {
		this.setState({
			activeTabId: id
		});
		const {updateActiveTab} = this.props;
		if (updateActiveTab) {
			updateActiveTab(id);
		}
	}
	
	render() {
		return (
			<ScrollView 
				contentContainerStyle={{flexDirection:'row', flexGrow: 1}}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
					{this.props.tabsContent.map(content => {
						const {name, id} = content;
						return (
							<TouchableOpacity onPress={() => this.updateActiveTabId(id)} key={name}>
								<View paddingLeft={20} paddingRight={20}>
										<Text 
											style={
												(content.id == this.state.activeTabId) ? 
													this.styles.selectedTabTitleStyle : this.styles.normalTabTitleStyle
											}
										>
											{name}
										</Text>
										{(content.id == this.state.activeTabId) ? 
											<View style={{borderWidth: 2, marginTop: 5, borderColor: 'green', backgroundColor: 'green'}}></View> : null}
								</View>
							</TouchableOpacity>
						);
					})}
			</ScrollView>
		);
	}
};

export default Tabs;
