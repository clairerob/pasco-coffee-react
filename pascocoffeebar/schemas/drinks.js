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
		// {
		// 	name: 'category',
		// 	title: 'Category',
		// 	type: 'reference',
		// 	to: {
		// 		type: 'category',
		// 	},
		// },
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
			validation: (Rule) => Rule.required(),
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
			validation: (Rule) => Rule.required(),
		},
	],
}

export default drinks
