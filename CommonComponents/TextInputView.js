import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import ClearAllIconView from './ClearAllIconView';

const TextInputView = ({
	placeHolder,
	defaultValue,
	onChangeHandler,
	affectedStateVarible,
	onClearButtonClick,
	clearIconBackgroundColor,
	clearIconColor,
	flex,
	hideBottomBar = false,
	isMandatoryField,
	isFieldNotFilled,
	isAllMandatoryFieldsNotFilled,
	shouldShowTopLabel = true
}) => {
	if (isMandatoryField) {
		placeHolder += '*';
	}
	
	const [textValue, updateTextValue] = useState('');
	const [isUpdatedOnce, textUpdatedOnce] = useState(false);
	const [showTopLabel, toggleTopLabel] = useState(false);
	
	const isMandatoryAndNotFilled = () => {
		if (
			((isAllMandatoryFieldsNotFilled && !isUpdatedOnce) || isUpdatedOnce)
			&& isMandatoryField && textValue === '')
			return true;						
		return false;
	};	
	
	const styles = StyleSheet.create({
		withBottomBar: {
			flexDirection: 'row',
			borderBottomWidth: 1,
			borderColor: isMandatoryAndNotFilled() ? 'red' : 'black'
		},
		withoutBottomBar: {
			flexDirection: 'row'
		}
	});
	
	const clearButtonHandler = () => {
		updateTextValue('');
		toggleTopLabel(!showTopLabel);
		if (onClearButtonClick) {
			onClearButtonClick(affectedStateVarible);
		}
	};
	
	const handleTextChange = (text) => {
		if (!isUpdatedOnce)
			textUpdatedOnce(true);
		updateTextValue(text);
		if (onChangeHandler) 
			onChangeHandler(text, affectedStateVarible);
		if (!showTopLabel)
			toggleTopLabel(true);
		if (text === '')
			toggleTopLabel(false);
	}
	
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
			<View style={hideBottomBar ? styles.withoutBottomBar : styles.withBottomBar}>
				<TextInput
					placeholder={placeHolder}
					placeholderTextColor={isMandatoryAndNotFilled() ? '#f88' : '#888'}
					defaultValue={defaultValue}
					onChangeText={text => handleTextChange(text)}
					style={{
						flex: 3,
						paddingBottom: 10,
						paddingTop: 5
					}}
					size={30}
				/>
				{textValue !== '' ? 
					<ClearAllIconView
						onClearButtonClick={clearButtonHandler}
						parameter={affectedStateVarible}
						backGroundColor={clearIconBackgroundColor}
						iconColor={clearIconColor}
					/> : null} 
			</View>
		</>
	);
};

export default TextInputView;