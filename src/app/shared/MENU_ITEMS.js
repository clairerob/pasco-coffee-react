import drink from '../assets/pumpkin-spice.jpg'
import latte from '../assets/latte.jpg'
import lattepour from '../assets/latte-pour.jpg'
import v60 from '../assets/v60.jpg'
import lavender from '../assets/lavender-latte.webp'
import mocha from '../assets/mocha.jpg'

export const MENU_ITEMS = [
	{
		id: 1,
		drink: 'Cold Brew',
		description:
			"Brewed for 18 hours with Oddly's signature cold brew blend of 50/50 Guatemala/Ethiopia Natural. Full-bodied, fruity, cocoa, blackberry, jammy",
		price: 4.0,
		size: '16oz',
		image: v60,
		featured: false,
		current: true,
	},
	{
		id: 2,
		drink: 'Cold Brew Latte',
		description: 'A smooth blend of cold-brewed espresso concentrate + milk',
		price: 5.0,
		size: '16oz',
		image: latte,
		featured: false,
		current: true,
	},
	{
		drink: 'House Vanilla Latte',
		description:
			'Cold-brewed espresso concentrate + house-made vanilla turbinado cane syrup + milk',
		price: 5.5,
		size: '16oz',
		image: lattepour,
		featured: false,
		current: true,
	},
	{
		id: 3,
		drink: 'Wild Lavender Latte',
		description:
			'Cold-brewed espresso concentrate + wildflower honey infused with organic lavender buds + milk + pink himalayan salt',
		price: 5.7,
		size: '16oz',
		image: lavender,
		featured: true,
		current: true,
	},
	{
		id: 4,
		drink: 'Cold Brew Tonic',
		description: 'Cold-brewed espresso concentrate + tonic water + orange peel',
		price: 4.5,
		size: '16oz',
		image: mocha,
		featured: false,
		current: true,
	},
	{
		id: 5,
		drink: 'Pumpkin Spice Cold Brew Latte',
		description: 'Autumn, but better',
		price: 5.5,
		size: '16oz',
		image: drink,
		featured: true,
		current: true,
	},
	{
		id: 6,
		drink: 'Pourovers',
		description:
			"Single origin and blended coffees brewed by hand, to order",
		price: 4.0,
		size: '16oz',
		image: v60,
		featured: true,
		current: true,
	},
	{
		id: 7,
		drink: 'Mocha',
		description: 'Hot, chocolatey, coffee',
		price: 4.5,
		size: '16oz',
		image: mocha,
		featured: true,
		current: true,
	},
]

// export const getAllMenuItems = () => {
//     return MENU_ITEMS;
// };

// export const getFeaturedMenuItems = () => {
//     return MENU_ITEMS.filter(item => item.featured);
// };

// export const getCurrentMenuItems = () => {
//     return MENU_ITEMS.filter(item => item.current);
// };
