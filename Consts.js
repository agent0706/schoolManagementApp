import {DistrictsList, MandalsList} from './DistrictsAndMandals';

export const TabsContent = [
	{
		name: 'CLASSES',
		id: 1
	},
	{
		name: 'STUDENTS',
		id: 2
	},
	{
		name: 'STAFF',
		id: 3
	}
];

export const SidebarItems = [
	'Home',
	'Add Class',
	'Add Staff',
	'Add Student',
];

export const SearchBarLabels = {
	SEARCH: 'Search',
	CLASSES: 'Classes',
	STUDENTS: 'Students',
	STAFF: 'Staff'
};

export const CreateStudentPageConsts = {
	HeaderLabel: 'STUDENT',
	ClickToAddImageLabel: 'Click to add image',
	BasicDetailsLabel: 'Student Basic Details',
	EnrollmentDetailsLabel: 'Class Enrollment Details',
	OtherDetailsLabel: 'Other Details',
	FormFields: {
		BasicDetails: [
			{
				name: 'Child Id',
				type: 'input',
				isMandatory: true
			},
			{
				name: 'Date Of Admission',
				type: 'date',
				isMandatory: true
			},
			{
				name: 'Addmission Number',
				type: 'input',
				isMandatory: true
			},
			{
				name: 'Aadhar Number',
				type: 'input'
			},
			{
				name: 'District',
				type: 'dropdown',
				isMandatory: true,
				supportSearch: true
			},
			{
				name: 'Mandal',
				type: 'dropdown',
				isMandatory: true,
				renderBasedOnField: 'District',
				supportSearch: true
			},
			{
				name: 'Village Name',
				type: 'input',
				isMandatory: true
			},
			{
				name: 'Habitat Name',
				type: 'input',
				isMandatory: true
			},
			{
				name: 'Gender',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Father Name',
				type: 'input',
				isMandatory: true
			},
			{
				name: 'Mother Name',
				type: 'input',
				isMandatory: true
			},
			{
				name: 'Date Of Birth',
				type: 'date',
				isMandatory: true
			},
			{
				name: 'Mobile Number',
				type: 'input'
			},
			{
				name: 'Religion',
				type: 'dropdown',
				isMandatory: true,
				acceptTextInput: true
			},
			{
				name: 'Caste',
				type: 'dropdown',
				isMandatory: true,
				acceptTextInput: true
			},
			{
				name: 'Mother Tongue',
				type: 'dropdown',
				isMandatory: true,
				acceptTextInput: true
			},
			{
				name: 'Child belongs to',
				type: 'dropdown',
				isMandatory: true
			}
		],
		EnrollmentDetails: [
			{
				name: 'Medium',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Present Class',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Section',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Vocational Subjects',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Class Admitted in',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'First Language',
				type: 'dropdown',
				defaultValue: 'Telugu'
			},
			{
				name: 'Second Language',
				type: 'dropdown',
				defaultValue: 'Hindi'
			},
			{
				name: 'Third Language',
				type: 'dropdown',
				defaultValue: 'English'
			},
			{
				name: 'Caste Certificate Number',
				type: 'input'
			},
			{
				name: 'Income Certificate Number',
				type: 'input'
			},
			{
				name: 'Ration Card Number',
				type: 'input'
			},
			{
				name: 'TC Number',
				type: 'input'
			},
		],
		OtherDetails: [
			{
				name: 'Height(cm)',
				type: 'input'
			},
			{
				name: 'Weight(Kgs)',
				type: 'input'
			},
			{
				name: 'Socio Economic Status of child',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Parent Literacy Status',
				type: 'dropdown',
				isMandatory: true,
			},
			{
				name: 'Parent Literacy Level',
				type: 'dropdown',
				isMandatory: true,
				renderBasedOnField: 'Parent Literacy Status'
			},
			{
				name: 'Child Has Insurance',
				type: 'dropdown',
				defaultValue: 'No'
			},
			{
				name: 'Distance From Home to School(kms)',
				type: 'dropdown',
				defaultValue: 'Below 1km'
			},
			{
				name: 'Mode of Transport',
				type: 'dropdown',
				defaultValue: 'By walk',
			},
			{
				name: 'Does belong to disadvataged',
				type: 'dropdown',
				defaultValue: 'No'
			},
			{
				name: 'Is Staying at Hostel',
				type: 'dropdown',
				isMandatory: true
			},
			{
				name: 'Child Blood Group',
				type: 'dropdown',
				isMandatory: true
			}
		]
	}
};

export const CreateClassPageConsts = {
	HeaderLabel: 'CLASS',
	ClickToAddImageLabel: 'Click to add image',
	FormConsts: {
		
	}
};

export const CreateStaffPageConsts = {
	HeaderLabel: 'STAFF',
	ClickToAddImageLabel: 'Click to add image',
	FormConsts: { 
		FirstNameLabel: 'First Name',
		MiddleNameLabel: 'Middle Name',
		LastNameLabel: 'Last Name'
	}
};

export const CreatePageConsts = {
	CreateLabel: 'CREATE',
	AddLabel: 'Add'
};

const Genders = [
	{value: 'Boy'},
	{value: 'Girl'}
];

const Religions = [
	{value: 'Hindu'},
	{value: 'Muslim'},
	{value: 'Christian'}	
];

const Castes = [
	{value: 'OC'},
	{value: 'BC'},
	{value: 'SC'},
	{value: 'ST'}		
];

const MotherTongues = [
	{value: 'Telugu'},
	{value: 'Urdu'},
	{value: 'Hindi'},
	{value: 'Kannada'},
	{value: 'Tamil'},
	{value: 'Malayalam'}		
];

const ChildBelongsTo = [
	{value: 'Rural'},
	{value: 'Urban'}
];

const Medium = [
	{value: 'Telugu'},
	{value: 'English'},
	{value: 'Urdu'}
];

const Classes = [
	{value: '6'},
	{value: '7'},
	{value: '8'},
	{value: '9'},
	{value: '10'}
];

const Sections = [
	{value: 'A'},
	{value: 'B'}
];

const Languages = [
	{value: 'Telugu'},
	{value: 'Hindi',},
	{value: 'English'}
];

const LiteracyStatus = [
	{value: 'Literate'},
	{value: 'Illiterate'}
];

const LiteracyLevels = [
	{value: 'Below SSC'}
];

const Asserstions = [
	{value: 'Yes'},
	{value: 'No'}
];

const DistanceEnums = [
{value: 'Below 1km'}
];

const ModeOfTransports = [
{value: 'By walk'}
];

const BloodGroups = [
	{value: 'A+'},
	{value: 'A-'},
	{value: 'B+'},
	{value: 'B-'},
	{value: 'AB+'},
	{value: 'AB-'},
	{value: 'O+'},
	{value: 'O-'},
	{value: 'Bombay Blood Group'}
];

export const DropDownsContent = {
	Medium,
	District: DistrictsList,
	Mandal: MandalsList,
	Gender: Genders,
	Religion: Religions,
	Caste: Castes,
	['Mother Tongue']: MotherTongues,
	['Child belongs to']: ChildBelongsTo,
	['Present Class']: Classes,
	['Class Admitted in']: Classes,
	Section: Sections,
	['First Language']: Languages,
	['Second Language']: Languages,
	['Third Language']: Languages,
	['Parent Literacy Status']: LiteracyStatus,
	['Parent Literacy Level']: LiteracyLevels,
	['Distance From Home to School(kms)']: DistanceEnums,
	['Mode of Transport']: ModeOfTransports,
	['Does belong to disadvataged']: Asserstions,
	['Child Has Insurance']: Asserstions,
	['Is Staying at Hostel']: Asserstions,
	['Child Blood Group']: BloodGroups,
	LiteracyLevels
};
