const classType = {
	name: 'classType',
	title: 'ClassType',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
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
