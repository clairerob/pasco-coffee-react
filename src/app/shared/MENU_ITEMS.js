import drink from '../assets/drink.jpg';
import icedLatte from '../assets/iced-latte-pour.jpg';
import lattepour from '../assets/latte-pour.jpg';
import v60 from '../assets/v60.jpg';
import lavender from '../assets/lavender-latte.webp';
import tonic from '../assets/tonic-pour.jpg';

const MENU_ITEMS = [
    {
        id: 1,
        drink: 'Cold Brew',
        description: 'Brewed for 18 hours with Oddly\'s signature cold brew blend of 50/50 Guatemala/Ethiopia Natural. Full-bodied, fruity, cocoa, blackberry, jammy',
        price: 4.00,
        size: '16oz',
        image: v60,
        featured: true,
        current: true,
    },
    {
        id: 2,
        drink: 'Cold Brew Latte',
        description: 'A smooth blend of cold-brewed espresso concentrate + milk',
        price: 5.00,
        size: '16oz',
        image: icedLatte,
        featured: false,
        current: true,
    },
    {
        drink: 'House Vanilla Latte',
        description: 'Cold-brewed espresso concentrate + house-made vanilla turbinado cane syrup + milk',
        price: 5.50,
        size: '16oz',
        image: lattepour,
        featured: false,
        current: true,
    },
    {
        id: 3,
        drink: 'Wild Lavender Latte',
        description: 'Cold-brewed espresso concentrate + wildflower honey infused with organic lavender buds + milk + pink himalayan salt',
        price: 5.70,
        size: '16oz',
        image: lavender,
        featured: true,
        current: true,
    },
    {
        id: 4,
        drink: 'Cold Brew Tonic',
        description: 'Cold-brewed espresso concentrate + tonic water + orange peel',
        price: 4.50,
        size: '16oz',
        image: tonic,
        featured: true,
        current: true,
    },
    {
        id: 5,
        drink: 'Pumpkin Spice Cold Brew Latte',
        description: 'Autumn, but better',
        price: 5.50,
        size: '16oz',
        image: drink,
        featured: true,
        current: true,
    },
    {
        id: 6,
        drink: 'Add-ons',
        description: 'oatmilk, syrups',
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