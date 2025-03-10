// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const mushroom1 = {
    id: 1,
    mushroomName: "Death cap",
    isEdible: false,
    matchRate: "99%",
    imgSrc: "assets/image.jpg",
    filters: ["Texas", "Recent"]
};
const mushroom2 = {
    id:2,
    mushroomName: "Paddy Straw",
    isEdible: false,
    matchRate: "99%",
    imgSrc: "assets/image.jpg",
    filters: ["Good for Broths", "Recent"]
};
const mushroom3 = {
    id:3,
    mushroomName: "Destroying angel",
    isEdible: false,
    matchRate: "99%",
    imgSrc: "assets/image.jpg",
    filters: ["Asia","Recent"]
};
const mushroom4 = {
    id:4,
    mushroomName: "False Death Cap",
    isEdible: false,
    matchRate: "99%",
    imgSrc: "assets/image.jpg",
    filters: ["Africa", "Recent"]
};
const mushroom5 = {
    id:5,
    mushroomName: "Puffball",
    isEdible: false,
    matchRate: "99%",
    imgSrc: "assets/image.jpg",
    filters: ["Europe","Medicinal", "Recent"]
};


const filterObject1 = {
    id:1,
    name:"Tags",
    filter:["Favorites", "Recent"]
}
const filterObject2 = {
    id:2,
    name:"Regions",
    filter:["Texas", "North America", "South America", "Asia", "Europe", "Africa"]
}
const filterObject3 = {
    id:3,
    name:"Categories",
    filter:["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
}

const mushList = [mushroom1,mushroom2, mushroom3, mushroom4, mushroom5]
const filterOptionList= [filterObject1, filterObject2, filterObject3]
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushroom1, mushList, filterOptionList}; // Requires import {warningMessage, dummyData} from './data/development.js';
