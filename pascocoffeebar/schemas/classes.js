const classes = {
	title: 'Classes',
	name: 'classes',
	type: 'document',
	fields: [
		{
			title: 'Class Name',
			name: 'className',
			type: 'string',
		},
		{
			title: 'Date',
			name: 'date',
			type: 'date',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Month',
			name: 'month',
			type: 'number',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Availability',
			name: 'availability',
			type: 'number',
			validation: (Rule) => Rule.required().positive().max('4'),
		},
		// {
		// 	title: 'Type',
		// 	name: 'type',
		// 	type: 'reference',
		// 	to: {
		// 		type: 'classType',
		// 	},
		// 	validation: (Rule) => Rule.required(),
		// },
	],
}

export default classes
