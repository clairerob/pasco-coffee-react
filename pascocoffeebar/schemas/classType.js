const classType = {
	name: 'classType',
	title: 'Class Type',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string',
		},
		{
			title: 'Image',
			name: 'classImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
}

export default classType
