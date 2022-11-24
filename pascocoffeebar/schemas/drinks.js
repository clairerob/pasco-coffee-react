const drinks = {
	title: 'Drinks',
	name: 'drinks',
	type: 'document',
	fields: [
		{
			title: 'Drink Name',
			name: 'drinkName',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Description',
			name: 'drinkDescription',
			type: 'text',
			options: {
				maxLength: 300,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Price',
			name: 'drinkPrice',
			type: 'number',
		},
		{
			title: 'Image',
			name: 'drinkImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Current',
			name: 'current',
			type: 'boolean',
		},
		{
			title: 'Featured',
			name: 'featured',
			type: 'boolean',
		},
	],
}

export default drinks
