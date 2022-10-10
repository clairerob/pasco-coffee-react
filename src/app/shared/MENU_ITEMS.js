import drink from '../assets/drink.jpg';
import latte from '../assets/latte-art.jpg';
import lattepour from '../assets/latte-pour.jpg';
import v60 from '../assets/v60.jpg';

const MENU_ITEMS = [
    {
        drink: 'Cold Brew',
        description: 'Brewed for 18 hours with Oddly\'s signature cold brew blend of 50/50 Guatemala/Ethiopia Natural. Full-bodied, fruity, cocoa, blackberry, jammy',
        price: 4.00,
        size: '16oz',
        image: {drink},
        featured: true,
        current: true,
    },
    {
        drink: 'Cold Brew Latte',
        description: 'A smooth blend of cold-brewed espresso concentrate + milk',
        price: 5.00,
        size: '16oz',
        image: {latte},
        featured: false,
        current: true,
    },
    {
        drink: 'House Vanilla Latte',
        description: 'Cold-brewed espresso concentrate + house-made vanilla turbinado cane syrup + milk',
        price: 5.50,
        size: '16oz',
        image: {lattepour},
        featured: false,
        current: true,
    },
    {
        drink: 'Wild Lavender Latte',
        description: 'Cold-brewed espresso concentrate + wildflower honey infused with organic lavender buds + milk + pink himalayan salt',
        price: 5.70,
        size: '16oz',
        image: {v60},
        featured: true,
        current: true,
    },
    {
        drink: 'Cold Brew Tonic',
        description: 'Cold-brewed espresso concentrate + tonic water + orange peel',
        price: 4.50,
        size: '16oz',
        image: 'this?',
        featured: true,
        current: true,
    },
    {
        drink: 'Add-ons',
        description: 'oatmilk, syrups?',
        price: 1.00,
        featured: false,
        current: true,
    },
];

export const getAllMenuItems = () => {
    return MENU_ITEMS;
};

export const getFeaturedMenuItems = () => {
    return MENU_ITEMS.filter(item => item.featured);
};

export const getCurrentMenuItems = () => {
    return MENU_ITEMS.filter(item => item.current);
};