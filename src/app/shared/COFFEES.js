export const COFFEES = [
    {
        id: 0,
        name: 'Good Girl: signature blend',
        roastery: 'Oddly Correct',
        country: 'United States of America',
        description: 'Oddly Correct house blend: a rotating cast of coffees; light, sweet, crisp',
        v60: 3.50,
        bag: 16.00,
        current: true,
    },
    {
        id: 1,
        name: 'David Rodriguez',
        roastery: 'Oddly Correct',
        country: 'Colombia',
        description: 'limeade, orange blossom, red wine, pomegranate',
        v60: 5.25,
        bag: 23.00,
        current: true,
    },
    {
        id: 2,
        name: 'Sumatra Pantan Musara',
        roastery: 'Oddly Correct',
        country: 'Indonesia',
        description: 'juicy, fruity, complex: cherry cola, watermelon candy, vanilla, dark chocolate',
        v60: 5.50,
        bag: 24.00,
        current: true,
    },
    {
        id: 3,
        name: 'Natural Dukamo',
        roastery: 'Oddly Correct',
        country: 'Ethiopia',
        description: 'natural process, jammy, fruity, sweet: blueberry, peach, milk chocolate',
        v60: 4.00,
        bag: 19.00,
        current: true,
    },
    {
        id: 4,
        name: 'Fazenda Sertao',
        roastery: 'Oddly Correct',
        country: 'Brazil',
        description: 'soft, silky, clean: green grape, almond milk, sweet cream, nutmeg',
        v60: 4.00,
        bag: 19.00,
        current: true,
    },
    {
        id: 5,
        name: 'Decaf Sugarcane EA Huila',
        roastery: 'Oddly Correct',
        country: 'Colombia',
        description: 'delicious decaf',
        v60: 3.50,
        bag: 16.00,
        decaf: true,
        current: true,
    },
];

export const getCurrentCoffees = () => {
    return COFFEES.filter(coffee => coffee.current);
};

export const getCurrentCoffeeCountries = () => {
    return COFFEES.reduce((acc, cur) => {
        if (cur.current) return [...acc, cur.country];
        return acc;
    }, [])
};

export const getCurrentCoffeesByCountry = (countryName) => {
    return COFFEES.filter(coffee => coffee.current && coffee.country === countryName);
};