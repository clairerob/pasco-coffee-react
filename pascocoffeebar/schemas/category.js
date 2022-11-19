const category = {
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Hex Code',
			name: 'hexCode',
			type: 'string',
		},
	],
};

export default category;
