const ROASTERIES = [
    {
        name: 'Oddly Correct',
        location: 'Kansas City, MO',
        featured: true,
    },
    {
        name: 'Thingy',
        location: 'Albany, GA',
        featured: true,
    },
    {
        name: 'Onyx',
        location: 'Jacksonville, FL',
        featured: false,
    },
    {
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