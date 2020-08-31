import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	TouchableWithoutFeedback
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {CreateStudentPageConsts, DropDownsContent} from '../Consts';
import CreatePageHeaderView from '../CommonComponents/CreatePageHeaderView';
import Box from '../CommonComponents/Box';
import ClearAllIconView from '../CommonComponents/ClearAllIconView';
import TextInputView from '../CommonComponents/TextInputView';
import DropDown from '../CommonComponents/DropDown';
import DateAndTimePickerView from '../CommonComponents/DateAndTimePickerView';
import {DistrictsList, MandalsList} from '../DistrictsAndMandals';

class CreateStudentComponent extends Component {
	constructor(props) {
		super(props);
		this.state=({
			isAllMandatoryFieldsFilled: true
		});
	}
	
	onRightSwipe = () => {
		this.props.navigation.toggleDrawer();
	};
	
	onClearButtonClick = (stateVarible) => {
		this.setState({
			[stateVarible]: ''
		});
	};
	
	onTextInputChange = (text, stateVarible) => {
		this.setState({
			[stateVarible]: text
		});
	};
	
	mandatoryFields = [];
	
	isFieldMandatory = (fieldStateVarible) => {
		return this.mandatoryFields.some(field => field === fieldStateVarible);
	};
	
	isMandatoryFieldNotFilled = (fieldStateVarible) => {
		if (
			this.isFieldMandatory(fieldStateVarible) &&
			!this.state.isAllMandatoryFieldsFilled &&
			this.state[fieldStateVarible] === '') {
			return true;
		}
		return false;
	};
	
	getTextInputProps = (name, stateVarible, defaultValue) => {
		return {
			placeHolder: name,
			defaultValue: defaultValue || this.state[stateVarible || name],
			onChangeHandler: this.onTextInputChange,
			affectedStateVarible: stateVarible || name,
			onClearButtonClick: this.onClearButtonClick,
			isMandatoryField: this.isFieldMandatory(stateVarible || name),
			isFieldNotFilled: this.isMandatoryFieldNotFilled(stateVarible || name),
			isAllMandatoryFieldsNotFilled: !this.state.isAllMandatoryFieldsFilled
		};
	};
	
	isMandatoryFieldsFilled = () => {
		return !this.mandatoryFields.find(field => this.state[field] === '');
	};
	
	onSubmitHandle = () => {
		const isAnyMandatoryFieldNotFilled = !this.mandatoryFields.find(field => this.state[field] === '');
		if (isAnyMandatoryFieldNotFilled) {
			this.setState({
				isAllMandatoryFieldsFilled: false
			});
		} else {
			this.setState({
				isAllMandatoryFieldsFilled: true
			});
		}
	};
	
	onSelectionChangeHandler = (selectedValue, name) => {
		if (name === 'District')
			this.setState({[name]: selectedValue, ['Mandal']: ''});
		this.setState({[name]: selectedValue});
	};
	
	getDropDownContent = (name) => {
		if (name === 'District') 
			return DistrictsList;
		if (name === 'Mandal')
			return MandalsList[this.state['District'].toUpperCase()];
		return DropDownsContent[name];
	};
	
	getDropDownView = ({name, acceptTextInput = false, supportSearch = false, defaultValue}) => {
		return (
			<View style={{paddingRight: 20, paddingLeft: 10}} key={name}>
				<DropDown
					placeHolder={name}
					content={this.getDropDownContent(name)}
					onSelectionChange={selectedValue => this.onSelectionChangeHandler(selectedValue, name)}
					isMandatoryField={this.isFieldMandatory(name)}
					isFieldNotFilled={this.isMandatoryFieldNotFilled(name)}
					isAllMandatoryFieldsNotFilled={!this.state.isAllMandatoryFieldsFilled}
					supportSearch={supportSearch}
					acceptTextInput={acceptTextInput}
					defaultValue={defaultValue}
				/>
			</View>
		);
	};
	
	getInputView = ({name, shouldShowTopLabel, defaultValue}) => {
		return (
			<View style={{paddingRight: 20, paddingLeft: 10}} key={name}>
				<TextInputView {...this.getTextInputProps(name, name, defaultValue)} shouldShowTopLabel={shouldShowTopLabel} />
			</View>
		);
	};
	
	getDateInputView = ({name}) => {
		return (
			<View style={{flex: 1, paddingRight: 20, paddingLeft: 10}} key={name} >
				<DateAndTimePickerView 
					placeHolder={name}
					isMandatoryField={this.isFieldMandatory(name)}
					isFieldNotFilled={this.isMandatoryFieldNotFilled(name)}
					isAllMandatoryFieldsNotFilled={!this.state.isAllMandatoryFieldsFilled}
					onDateOrTimeChange={selectedValue => this.setState({[name]: selectedValue})}
					affectedStateVarible={name}
				/>
			</View>
		);
	};
	
	getfieldView = (fieldProps) => {
		if (fieldProps.name === 'Parent Literacy Level' && this.state['Parent Literacy Status'] !== 'Literate') 
			return null;
		switch (fieldProps.type) {
			case 'dropdown': 
				return this.getDropDownView(fieldProps);
			break;
			case 'input': 
				return this.getInputView(fieldProps);
			break;
			case 'date':
				return this.getDateInputView(fieldProps);
			break;
			default:
				return null;
		};
	};		
	
	getFormFields = (formFields) => {
		const form = [];
		formFields.forEach(field => {
			const {	
				name,
				type,
				isMandatory = false,
				renderBasedOnField,
				supportSearch,
				acceptTextInput,
				defaultValue
			} = field;
			if (isMandatory) 
				this.mandatoryFields.push(name);
			form.push(
				type ?
					renderBasedOnField ? 
						(this.state[renderBasedOnField] && this.state[renderBasedOnField] !== '' ? 
							this.getfieldView(field)
						: null)
					: this.getfieldView(field)
				: null
			);
		});
		return form;
	};
	
	getCreateStudentFormView = () => {
		const {BasicDetailsLabel, EnrollmentDetailsLabel, OtherDetailsLabel, FormFields} = CreateStudentPageConsts;
		const {BasicDetails, EnrollmentDetails, OtherDetails} = FormFields;
		return (
			<View>
				{(!this.state.isAllMandatoryFieldsFilled && this.isMandatoryFieldsFilled()) &&
					<Text style={{color: 'red'}}>Some mandatory Fields are not filled</Text>
				}
				<Text style={{fontWeight: 'bold', paddingBottom: 5, paddingTop: 10, paddingLeft: 10, fontSize: 20}}>{BasicDetailsLabel}</Text>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<View style={{flex: 3, paddingRight: 20, paddingLeft: 10}}>
						<TextInputView {...this.getTextInputProps('First Name', 'firstNameText')} shouldShowTopLabel={false} />
						<TextInputView {...this.getTextInputProps('Middle Name', 'middleNameText')} shouldShowTopLabel={false} />
						<TextInputView {...this.getTextInputProps('Last Name', 'lastNameText')} shouldShowTopLabel={false} />
					</View>
					<View style={{flexGrow: 1, paddingTop: 5}}>
						<Box flexValue={5} borderWidth={5} borderRadius={10} padding={0} borderColor='green'>
							<Text>Add</Text>
						</Box>
					</View>	
				</View>
				{this.getFormFields(BasicDetails)}
				<Text style={{fontWeight: 'bold', paddingBottom: 5, paddingTop: 10, paddingLeft: 10, fontSize: 20}}>{EnrollmentDetailsLabel}</Text>
				{this.getFormFields(EnrollmentDetails)}
				<Text style={{fontWeight: 'bold', paddingBottom: 5, paddingTop: 10, paddingLeft: 10, fontSize: 20}}>{OtherDetailsLabel}</Text>
				{this.getFormFields(OtherDetails)}
				<View style={{paddingTop: 30}} />
			</View>
		);
	};
	
	render () {
		return (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<GestureRecognizer
					onSwipeRight={this.onRightSwipe}
					style={{flexGrow: 1, backgroundColor: '#fff'}}
				>
					<CreatePageHeaderView pageNameLabel={CreateStudentPageConsts.HeaderLabel} />
					<Box flexValue={8} borderWidth={5} borderRadius={10} padding={0} borderColor='green'>
						<ScrollView keyboardShouldPersistTaps={'handled'}>
							{this.getCreateStudentFormView()}
						</ScrollView>
					</Box>
					<View style={{flex: 1}}>
						<Button onPress={() => this.onSubmitHandle()} title='press'/>
					</View>
				</GestureRecognizer>
			</View>
		);
	};
};

export default CreateStudentComponent;
