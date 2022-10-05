const WORKSHOPS = [
    {
        id: 0,
        date: '11/01/2022',
        name: 'cupping',
        max_spaces: 4,
        featured: true,
    },
    {
        id: 1,
        date: '11/15/2022',
        name: 'cupping',
        max_spaces: 4,
        featured: false,
    },
    {
        id: 2,
        date: '11/29/2022',
        name: 'brewing',
        max_spaces: 4,
        featured: false,
    },
    {
        id: 3,
        date: '12/12/2022',
        name: 'espresso',
        max_spaces: 4,
        featured: false,
    },
    {
        id: 4,
        date: '12/28/2022',
        name: 'cupping',
        max_spaces: 4,
        featured: false,
    },
    {
        id: 5,
        date: '12/29/2022',
        name: 'espresso',
        max_spaces: 4,
        featured: false,
    },
];

const WORKSHOPDESCRIPTIONS = {
    cupping: 'A guided group cupping session comparing a variety of coffees from around the world, exploring the different impacts on the beans of processing, roasting and the soil it grew in. Great for anyone new to coffee tasting as well as those just looking to try something new!',
    brewing: 'Home coffee brewing method (v60, aeropress, chemex etc) techniques are explored, to give you the skills and confidence to brew a delicious cup from home',
    espresso: 'Learn how to dial in perfect espresso! Not sure why some days it tastes great and other days...not so much? Consistency and delicious coffee await!',
    latte_art: 'The latte art class will focus on steaming milk to a super-smooth texture, and techniques to make your drinks look as good as they taste',
};

export const getAllWorkshops = () => {
    return WORKSHOPS
};

export const GetFeaturededWorkshops = () => {
    return WORKSHOPS.find(workshop => workshop.featured);
};

export const GetMonthWorkshops = (month) => {
    return WORKSHOPS.filter(workshop => workshop.date
        //google how best to parse dates
        );
};

export const GetWorkshopDescription = (name) => {
    return WORKSHOPDESCRIPTIONS[name];
};