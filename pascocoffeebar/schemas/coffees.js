const drinks = {
	title: 'Coffees',
	name: 'coffees',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'coffeeName',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Roastery',
			name: 'roastery',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Country',
			name: 'country',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string',
			options: {
				maxLength: 300,
			},
		},
		{
			title: 'v60 Price',
			name: 'v60Price',
			type: 'number',
		},
		{
			title: 'Bag Price',
			name: 'bagPrice',
			type: 'number',
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
