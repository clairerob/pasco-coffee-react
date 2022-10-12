const ROASTERIES = [
    {
        id: 0,
        name: 'Oddly Correct',
        location: 'Kansas City, MO',
        featured: true,
    },
    {
        id: 1,
        name: 'Thingy',
        location: 'Albany, GA',
        featured: true,
    },
    {
        id: 2,
        name: 'Onyx',
        location: 'Jacksonville, FL',
        featured: false,
    },
    {
        id: 3,
        name: 'HasBean',
        location: 'UK',
        featured: false,
    },
];

export const getAllRoasteries = () => {
    return ROASTERIES;
};

export const getFeaturedRoasteries = () => {
    return ROASTERIES.filter(roastery => roastery.featured);
};