const roasteries = {
	title: 'Roasteries',
	name: 'roasteries',
	type: 'document',
	fields: [
		{
			title: 'Roastery Name',
			name: 'roasteryName',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Location',
			name: 'location',
			type: 'string',
		},
		{
			title: 'Featured',
			name: 'featured',
			type: 'boolean',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Roastery Logo',
			name: 'roasteryLogo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Link',
			name: 'link',
			type: 'url',
		},
	],
}

export default roasteries
