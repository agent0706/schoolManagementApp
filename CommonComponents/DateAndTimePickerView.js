import React, {useState} from 'react';
import {
	View,
	Text,
	TouchableWithoutFeedback
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ClearAllIconView from './ClearAllIconView';

const DateAndTimePickerView = ({
	selectTime = false,
	placeHolder,
	onDateOrTimeChange,
	isMandatoryField,
	isFieldNotFilled,
	isAllMandatoryFieldsNotFilled,
	affectedStateVarible,
	shouldShowTopLabel = true
}) => {
	const pickerMode = selectTime ? 'time' : 'date';
	const [showDatePicker, togglePicker] = useState(false);
	const [selectedDate, updateDate] = useState(new Date());
	const [isUpdatedOnce, dateUpdatedOnce] = useState(false);
	const [showClearIcon, toggleCloseIcon] = useState(false);
	const [showTopLabel, toggleTopLabel] = useState(false);

	const isMandatoryAndNotFilled = () => {
		if (((isAllMandatoryFieldsNotFilled && !isUpdatedOnce) || isUpdatedOnce)
			&& isMandatoryField && !showClearIcon)
			return true;
		return false;
	};	
	
	let placeHolderText = placeHolder ? placeHolder : (selectTime ? 'Select Time' : 'Select Date');
	
	if (isMandatoryField)
		placeHolderText += '*';
	
	const getCurrentDateString = (changedDate) => {
		let date = changedDate.getDate();
		if (date%10 === date)
			date = '0' + date;
		let month = changedDate.getMonth();
		if (month%10 === month)
			month = '0' + month;
		return date + '-' + month + '-' + changedDate.getFullYear();
	};
	
	const getCurrentTimeString = (changedDate) => {
		return changedDate.getHours() + ':' + changedDate.getMinutes();
	};
	
	const onChangeHandler = (changedDate, shouldTogglePicker = true) => {
		if (shouldTogglePicker)
			togglePicker(!showDatePicker);
		if (changedDate) {
			if (!showClearIcon) 
				toggleCloseIcon(!showClearIcon);			
			if (!isUpdatedOnce)
				dateUpdatedOnce(!isUpdatedOnce);
			updateDate(changedDate);
			const onChangeParameter = selectTime ? 
				geCurrentTimeString(changedDate) : getCurrentDateString(changedDate);
			if (onDateOrTimeChange)
				onDateOrTimeChange(onChangeParameter);
			if (!showTopLabel)
				toggleTopLabel(true);
			if (!shouldTogglePicker)
				toggleTopLabel(false);
		}
	};
	
	const clearButtonHandler = () => {
		toggleCloseIcon(!showClearIcon);
		onChangeHandler(new Date(), false);
	};
	
	const textToDisplay = selectTime ? selectedTime : selectedDate; 
	
	const textColor = showClearIcon ? 'black' : isMandatoryAndNotFilled() ? '#f88' : '#888';
	
	return (
		<>
			{shouldShowTopLabel && showTopLabel ? 
				<Text style={{
					paddingBottom: 0,
					paddingTop: 10,
					color: isMandatoryAndNotFilled() ? '#f88' : '#888'}}
				>
					{placeHolder}
				</Text> : null
			}
			<TouchableWithoutFeedback onPress={() => togglePicker(!showDatePicker)}>
				<View>
					<View style={{
						borderBottomWidth: 1,
						borderColor: isMandatoryAndNotFilled() ? 'red' : 'black',
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center'
					}}>
						<Text style={{
							paddingLeft: 5,
							color: textColor,
							paddingTop: 15,
							paddingBottom: 15,
							flex: 3
						}}>
							{showClearIcon ? getCurrentDateString(selectedDate) : placeHolderText}
						</Text>
						{showClearIcon ?
							<ClearAllIconView 
								onClearButtonClick={clearButtonHandler}
								parameter={affectedStateVarible}
							/> : null
						}
					</View>
					{showDatePicker &&
						<DateTimePicker
							value={selectedDate}
							mode={pickerMode}
							display="default"
							onChange={(event, date) => onChangeHandler(date)}
						/>
					}
				</View>
			</TouchableWithoutFeedback>
		</>
	);
};

export default DateAndTimePickerView;