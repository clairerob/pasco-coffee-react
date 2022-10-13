import oddly from '../assets/roastery-logos/oddly-correct-logo.png';
import strata from '../assets/roastery-logos/strata-logo.png';
import panther from '../assets/roastery-logos/panther-logo.png';
import hasbean from '../assets/roastery-logos/hasbean-logo.svg';

const ROASTERIES = [
    {
        id: 0,
        name: 'Oddly Correct',
        location: 'Kansas City, MO',
        featured: true,
        image: oddly,
        link: 'https://oddlycorrect.com/',
    },
    {
        id: 1,
        name: 'Strata',
        location: 'Albany, GA',
        featured: true,
        image: strata,
        link: 'https://stratacoffeeroasting.com/',
    },
    {
        id: 2,
        name: 'Panther',
        location: 'Jacksonville, FL',
        featured: false,
        image: panther,
        link: 'https://www.panthercoffee.com/',
    },
    {
        id: 3,
        name: 'HasBean',
        location: 'UK',
        featured: false,
        image: hasbean,
        link: 'https://www.hasbean.co.uk/',
    },
];

export const getAllRoasteries = () => {
    return ROASTERIES;
};

export const getFeaturedRoasteries = () => {
    return ROASTERIES.filter(roastery => roastery.featured);
};