const stripe = require('stripe')(
	'sk_test_51Luzt3JhJ2RrHs0XEuH6JG6ObpnGFLYwoExPViS0LuxxxB4P6Xg0yEiamCf7BpYvkDRhvLhnkMCUKjjOuG60tjwY00jvH0PYxw'
);

stripe.products
	.create({
		name: 'Starter Subscription',
		description: '$12/Month subscription',
	})
	.then((product) => {
		stripe.prices
			.create({
				unit_amount: 1200,
				currency: 'usd',
				recurring: {
					interval: 'month',
				},
				product: product.id,
			})
			.then((price) => {
				console.log(
					'Success! Here is your starter subscription product id: ' + product.id
				);
				console.log(
					'Success! Here is your premium subscription price id: ' + price.id
				);
			});
	});
