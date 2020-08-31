/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePageComponent from './HomePage/HomePageComponent';	 
import {View, Text} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CreateStudentComponent from './CreateStudentPage/CreateStudentComponent';
import CreateClassComponent from './CreateClassPage/CreateClassComponent';
import CreateStaffComponent from './CreateStaffPage/CreateStaffComponent';

const Drawer = createDrawerNavigator();

const DummyPage = () => {
	return (
		<View>
			<Text>
				Ajay
			</Text>
		</View>
	);
}

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
				initialRouteName="Home" 
				drawerType="back"
				drawerStyle={{
					backgroundColor: '#fff',
					width: 240
				}}
				drawerContentOptions={{
					activeTintColor: 'green',
				}}
				backBehavior="initialRoute"
			>
				<Drawer.Screen name="Home" component={HomePageComponent} />
				<Drawer.Screen name="Add Student" component={CreateStudentComponent} />
				<Drawer.Screen name="Add Class" component={CreateClassComponent} />
				<Drawer.Screen name="Add Staff" component={CreateStaffComponent} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;
