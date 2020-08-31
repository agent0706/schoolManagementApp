import React, {useState} from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback,
	TouchableHighlight,
	ScrollView,
	Button,
	StyleSheet,
	TextInput
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import Box from './Box';
import TextInputView from './TextInputView';
import ClearAllIconView from './ClearAllIconView';

const DropDown = ({
	content = [],
	placeHolder,
	defaultValue,
	isOpenDefault,
	onSelectionChange,
	popUpHeight = 300,
	supportSearch = false,
	acceptTextInput = false,
	isMandatoryField,
	isFieldNotFilled,
	isAllMandatoryFieldsNotFilled,
	shouldShowTopLabel = true
}) => {
	const searchLabel = placeHolder;
	if (isMandatoryField) {
		placeHolder += '*';
	}
	
	const [isDropDownOpen, toggleDropDown] = useState(isOpenDefault ? true : false);
	const [selectedOption, setSelectedOption] = useState(defaultValue ? defaultValue : '');
	const [searchText, updateSearchText] = useState('');
	const [alternateTextInput, updateAlternateInputText] = useState('');
	const [isUpdatedOnce, textUpdatedOnce] = useState(false);
	const [showTopLabel, toggleTopLabel] = useState(defaultValue ? true : false);
	
	const isMandatoryAndNotFilled = () => {
		if (
			((isAllMandatoryFieldsNotFilled && !isUpdatedOnce) || isUpdatedOnce)
			&& isMandatoryField && selectedOption === '')
			return true;						
		return false;
	};	
	
	if (supportSearch) {
		supportSearch = content.length > 10;
	}
	
	const getDownArrowIconView = () => {
		return (
			<Icon
				name='down'
				size={20} 
				backgroundColor='#fff'
				color={isMandatoryAndNotFilled() ? 'red' : 'black'}
				style={{flex: 1, paddingLeft: 15}}
			/>
		);
	}
	
	const getUpArrowIconView = () => {
		return (
			<Icon
				name='up'
				size={20} 
				backgroundColor='#fff'
				color={isMandatoryAndNotFilled() ? 'red' : 'black'}
				style={{flex: 1, paddingLeft: 15}}
			/>
		);
	};
	
	const getDropDownIconView = (isDropDownOpen) => {
		return isDropDownOpen ? getUpArrowIconView() : getDownArrowIconView()
	};
	
	const getSearchBoxView = () => {
		return (
			<TextInputView 
				placeHolder={`Search ${searchLabel}`}
				onChangeHandler={text => updateSearchText(text)}
				onClearButtonClick={() => updateSearchText('')}
				defaultValue={searchText}
				clearIconBackgroundColor="#e7e7ed"
				shouldShowTopLabel={false}
			/>
		);
	};
	
	const getModalContent = () => {
		
		if (supportSearch && searchText !== '') {
			content = content.filter((item) => {
				return item.value.toUpperCase().startsWith(searchText.toUpperCase());
			});
		}
		
		return (
			<>
				<TouchableHighlight underlayColor="green" key="none" onPress={() => onSelectOption('')}>
					<View style={{paddingTop: 10, paddingBottom: 10}}>
						<Text style={{color: 'red'}}>----None----</Text>
					</View>
				</TouchableHighlight>
				{content.map((item, index) => {
					if (item.value === selectedOption) return false;
					return (
						<TouchableHighlight 
							underlayColor="green"
							key={item.value+index}
							onPress={() => onSelectOption(item.value)}
						>
							<View style={{paddingTop: 10, paddingBottom: 10}}>
								<Text>{item.value}</Text>
							</View>
						</TouchableHighlight>
					);
				})}
			</>
		);
	};
	
	const handleToggleDropDown = () => {
		updateSearchText('');
		toggleDropDown(!isDropDownOpen);	
	}		
	
	const onSelectOption = (selectedValue, dontToggleDropDown) => {
		if (!dontToggleDropDown)
			toggleDropDown(!isDropDownOpen);
		if (!isUpdatedOnce)
			textUpdatedOnce(true)
		if (acceptTextInput)
			updateAlternateInputText(selectedValue);
		setSelectedOption(selectedValue);
		if (onSelectionChange)
			onSelectionChange(selectedValue);
		if (!showTopLabel)
			toggleTopLabel(true);
		if (selectedValue === '')
			toggleTopLabel(false);
	};
	
	const textInputChangeHandler = (text) => {
		const contentEquivalentOfInput = content.find(item => text.toUpperCase() === item.value.toUpperCase());
		if (contentEquivalentOfInput) text = contentEquivalentOfInput.value;
		onSelectOption(text, true);
	};
	
	const styles = StyleSheet.create({
		withBottomBar: {
			flexDirection: 'row',
			borderBottomWidth: isMandatoryAndNotFilled() || isMandatoryField ? 1.5 : 1,
			borderColor: isMandatoryAndNotFilled() ? 'red' : 'black'
		},
		withoutBottomBar: {
			flexDirection: 'row'
		}
	});
	
	const clearButtonHandler = () => {
		onSelectOption('', true);
	};
	
	const getTextInputView = () => {
		return (
			<View style={styles.withoutBottomBar}>
				<TextInput
					placeholder={placeHolder}
					placeholderTextColor={isMandatoryAndNotFilled() ? '#f88' : '#888'}
					defaultValue={selectedOption}
					onChangeText={text => textInputChangeHandler(text)}
					style={{
						paddingBottom: 10,
						flex: 3
					}}
					size={30}
				/>
				{alternateTextInput !== '' ? 
					<ClearAllIconView
						onClearButtonClick={clearButtonHandler}
					/> : null} 
			</View>
		);
	};
	
	const textColor = (selectedOption !== '') ? 'black' : isMandatoryAndNotFilled() ? '#f88' : '#888';

	return (
		<>
			{shouldShowTopLabel && showTopLabel ?
				<Text style={{
					paddingBottom: 0,
					paddingTop: 10,
					color: isMandatoryAndNotFilled() ? '#f88' : '#888'}}
				>
					{placeHolder}
				</Text> : null}
			<View style={{flex: 1, flexDirecttion: 'column'}}>
				<View style={{flex: 1}}>
					<TouchableWithoutFeedback onPress={() => handleToggleDropDown(!isDropDownOpen)}>
						{acceptTextInput ? 
							<View style={
								{
									borderBottomWidth: 1,
									borderColor: isMandatoryAndNotFilled() ? 'red' : 'black',
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center',
									paddingTop: 2
								}
							}>
								<View style={{flex: 10}}>
									{getTextInputView()}
								</View>
								{getDropDownIconView(isDropDownOpen)}
							</View> :
							<View style={
								{
									borderBottomWidth: 1,
									borderColor: isMandatoryAndNotFilled() ? 'red' : 'black',
									paddingTop: 12,
									paddingBottom: 12,
									flex: 1,
									flexDirection: 'row',
									alignItems: 'center'
								}
							}>
								<Text style={{color: textColor, flex: 10, paddingLeft: 5}}>
									{(selectedOption !== '') ? selectedOption : placeHolder}
								</Text>
								{getDropDownIconView(isDropDownOpen)}
							</View>
						}
					</TouchableWithoutFeedback>
				</View>
				<Modal 
					style={{flex: 1}}
					isVisible={isDropDownOpen}
					onBackButtonPress={() => handleToggleDropDown(!isDropDownOpen)}
					onBackdropPress={() => handleToggleDropDown(!isDropDownOpen)}
					backdropOpacity={0}
					scrollOffsetMax={10}
				>
					<Box backgroundColor="#e7e7ed" borderRadius={10} width="auto">
						{supportSearch ? getSearchBoxView() : null}
						<ScrollView style={content.length>5 && {height: popUpHeight}} keyboardShouldPersistTaps="handled">
							{getModalContent()}
						</ScrollView>
					</Box>	
				</Modal>		
			</View>
		</>
	);
};

export default DropDown;