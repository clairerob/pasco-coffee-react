const classes = {
	title: 'Classes',
	name: 'classes',
	type: 'document',
	fields: [
		{
			title: 'Class Title',
			name: 'classTitle',
			type: 'string',
		},
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Date',
			name: 'date',
			type: 'date',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Availability',
			name: 'availability',
			type: 'number',
			validation: (Rule) => Rule.required().positive().max('4'),
		},
		{
			title: 'Type',
			name: 'type',
			type: 'reference',
			to: [
				{
					type: 'classType',
				},
			],
		},
	],
}

export default classes
