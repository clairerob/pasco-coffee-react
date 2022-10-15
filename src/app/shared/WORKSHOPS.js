import v60 from '../assets/v60.jpg';
import latte from '../assets/latte-pour.jpg';
import latteArt from '../assets/latte-art.jpg';
import tonic from '../assets/tonic-detail.jpg';

const WORKSHOPDESCRIPTIONS = {
    cupping: 'A guided group cupping session comparing a variety of coffees from around the world, exploring the different impacts on the beans of processing, roasting and the soil it grew in. Great for anyone new to coffee tasting as well as those just looking to try something new!',
    brewing: 'Home coffee brewing method (v60, aeropress, chemex etc) techniques are explored, to give you the skills and confidence to brew a delicious cup from home',
    espresso: 'Learn how to dial in perfect espresso! Not sure why some days it tastes great and other days...not so much? Consistency and delicious coffee await!',
    latte_art: 'The latte art class will focus on steaming milk to a super-smooth texture, and techniques to make your drinks look as good as they taste',
};

const WORKSHOPIMAGES = {
    cupping: tonic,
    brewing: v60,
    espresso: latte,
    latte_art: latteArt
};

const WORKSHOPS = [
    {
        id: 0,
        date: '11/01/2022',
        month: 'november',
        name: 'cupping',
        spaces: 2,
        featured: true,
        description: WORKSHOPDESCRIPTIONS.cupping,
        image: WORKSHOPIMAGES.cupping,
    },
    {
        id: 1,
        date: '11/15/2022',
        month: 'november',
        name: 'brewing',
        spaces: 1,
        featured: false,
        description: WORKSHOPDESCRIPTIONS.brewing,
        image: WORKSHOPIMAGES.brewing,
    },
    {
        id: 2,
        date: '11/29/2022',
        month: 'november',
        name: 'cupping',
        spaces: 2,
        featured: false,
        description: WORKSHOPDESCRIPTIONS.cupping,
        image: WORKSHOPIMAGES.cupping,
    },
    {
        id: 3,
        date: '12/12/2022',
        month: 'december',
        name: 'latte_art',
        max_spaces: 4,
        featured: false,
        description: WORKSHOPDESCRIPTIONS.espresso,
        image: WORKSHOPIMAGES.latte_art,
    },
    {
        id: 4,
        date: '12/28/2022',
        month: 'december',
        name: 'cupping',
        spaces: 4,
        featured: false,
        description: WORKSHOPDESCRIPTIONS.cupping,
        image: WORKSHOPIMAGES.cupping,
    },
    {
        id: 5,
        date: '12/05/2022',
        month: 'december',
        name: 'brewing',
        spaces: 3,
        featured: false,
        description: WORKSHOPDESCRIPTIONS.brewing,
        image: WORKSHOPIMAGES.brewing,
    },
    {
        id: 6,
        date: '12/29/2022',
        month: 'december',
        name: 'espresso',
        spaces: 0,
        featured: false,
        description: WORKSHOPDESCRIPTIONS.espresso,
        image: WORKSHOPIMAGES.espresso,
    },
];


export const getAllWorkshops = () => {
    return WORKSHOPS
};

export const GetFeaturededWorkshops = () => {
    return WORKSHOPS.find(workshop => workshop.featured)
};

export const GetMonthWorkshops = (month) => {
    return WORKSHOPS.filter(workshop => workshop.date
        //google how best to parse dates
        );
};

export const GetWorkshopDescription = (name) => {
    return WORKSHOPDESCRIPTIONS[name];
};