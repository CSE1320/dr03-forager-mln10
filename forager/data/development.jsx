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
    mushroomName: "warning",
    isEdible: true,
    matchRate: "99%",
    imgSrc: "assets/image.jpg"
};

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushroom1}; // Requires import {warningMessage, dummyData} from './data/development.js';
