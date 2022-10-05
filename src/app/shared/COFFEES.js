const COFFEES = [
    {
        name: 'GOOD GIRL: signature blend',
        roastery: 'Oddly Correct',
        country: 'blend',
        description: 'rotating cast of coffees; light, sweet, crisp',
        v60: 3.50,
        bag: 16.00,
        current: true,
    },
    {
        name: 'David Rodriguez',
        roastery: 'Oddly Correct',
        country: 'Colombia',
        description: 'limeade, orange blossom, red wine, pomegranate',
        v60: 5.25,
        bag: 23.00,
        current: true,
    },
    {
        name: 'Sumatra Pantan Musara',
        roastery: 'Oddly Correct',
        country: 'Indonesia',
        description: 'juicy, fruity, complex: cherry cola, watermelon candy, vanilla, dark chocolate',
        v60: 5.50,
        bag: 24.00,
        current: true,
    },
    {
        name: 'Natural Dukamo',
        roastery: 'Oddly Correct',
        country: 'Ethiopia',
        description: 'natural process, jammy, fruity, sweet: blueberry, peach, milk chocolate',
        v60: 4.00,
        bag: 19.00,
        current: true,
    },
    {
        name: 'Fazenda Sertao',
        roastery: 'Oddly Correct',
        country: 'Brazil',
        description: 'soft, silky, clean: green grape, almond milk, sweet cream, nutmeg',
        v60: 4.00,
        bag: 19.00,
        current: true,
    },
    {
        name: 'Decaf Sugarcane EA Huila',
        roastery: 'Oddly Correct',
        country: Colombia,
        description: 'rotating cast of coffees; light, sweet, crisp',
        v60: 3.50,
        bag: 16.00,
        decaf: true,
        current: true,
    },
];

export const getAllCoffees = () => {
    return COFFEES;
};

export const getCurrentCoffees = () => {
    return COFFEES.filter(coffee => coffee.current);
};

