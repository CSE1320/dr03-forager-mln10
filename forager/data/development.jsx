// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution.",
    color: "customRed"
};

const percentageInfo = {
    header: "",
    icon: "",
    message: "Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "customGreen"
};

const warningMatchResult = {
    header: "ATTENTION!",
    icon: "/icons/icon_warning.svg",
    message: "Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake.",
    color: "customRed"
};

var yourMushroom = {
    id: 0,
    mushroomName: "Your Photo",
    scientificName: "Amanita phalloides",
    isEdible: false,
    matchRate: "",
    imgSrc: "assets/image 8.png",
    filters: ["Texas", "Recent"],
    facts: {
        header: "Fast Facts", 
        icon: "",
        capDiameter:"5-15cm",
        gillColor:"White",
        color: "customFactColor",
        capColor:"Brown"
    }
};

var mushroom1 = {
    id: 1,
    mushroomName: "Death cap",
    scientificName: "Amanita phalloides",
    isEdible: false,
    matchRate: "99%",
    imgSrc: "assets/image 9.png",
    filters: ["Texas", "Recent"],
    facts: {
        header: "Fast Facts",
        icon: "",
        capDiameter:"5-15cm",
        gillColor:"White",
        color: "customFactColor",
        capColor:"Yellow"
    }
};
var mushroom2 = {
    id:2,
    mushroomName: "Paddy Straw",
    scientificName: "Amanita phalloides",
    isEdible: true ,
    matchRate: "90%",
    imgSrc: "assets/image 3.png",
    filters: ["Good for Broths", "Recent"],
    facts: {
        header: "Fast Facts",
        icon: "",
        capDiameter:"5-15cm",
        gillColor:"White",
        color: "customFactColor",
        capColor:"Yellow"
    }
};
var mushroom3 = {
    id:3,
    mushroomName: "Destroying angel",
    scientificName: "Amanita phalloides",
    isEdible: false,
    matchRate: "80%",
    imgSrc: "assets/image 4.png",
    filters: ["Asia","Recent"],
    facts: {
        header: "Fast Facts",
        icon: "",
        capDiameter:"5-15cm",
        gillColor:"White",
        color: "customFactColor",
        capColor:"Yellow"
    }
};
var mushroom4 = {
    id:4,
    mushroomName: "False Death Cap",
    scientificName: "Amanita phalloides",
    isEdible: false,
    matchRate: "70%",
    imgSrc: "assets/image 5.png",
    filters: ["Africa", "Recent"],
    facts: {
        header: "Fast Facts",
        icon: "",
        capDiameter:"5-15cm",
        gillColor:"White",
        color: "customFactColor",
        capColor:"Yellow"
    }
};
var mushroom5 = {
    id:5,
    mushroomName: "Puffball",
    scientificName: "Amanita phalloides",
    isEdible: true,
    matchRate: "60%",
    imgSrc: "assets/image 6.png",
    filters: ["Europe","Medicinal", "Recent"],
    facts: {
        header: "Fast Facts",
        icon: "",
        capDiameter:"5-15cm",
        gillColor:"White",
        color: "customFactColor",
        capColor:"Yellow"
    }
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

const comparisonData = [
    { id: 1, editable: "Flat", col2: "Cap Shape", col3: "Flat" },
    { id: 2, editable: "Brown", col2: "Cap Color", col3: "Yello" },
    { id: 3, editable: "Smooth", col2: "Cap Texture", col3: "Smooth" },
    { id: 4, editable: "Free", col2: "Gill Type", col3: "Free" }, 
    { id: 5, editable: "White", col2: "Stem Color", col3: "White" },
    { id: 6, editable: "Absent", col2: "Stem Ring", col3: "Absent" },
    { id: 7, editable: "?", col2: "Cap Texture", col3: "Near oak/beech" }
]

const mushList = [mushroom1,mushroom2, mushroom3, mushroom4, mushroom5]
const similarMatches= [mushroom2, mushroom3, mushroom4, mushroom5]
const compareList = [yourMushroom,mushroom1]
const filterOptionList= [filterObject1, filterObject2, filterObject3]
export {warningMessage, dummyData, mushList, similarMatches, filterOptionList, percentageInfo, warningMatchResult,compareList, comparisonData}; // Requires import {warningMessage, dummyData} from './data/development.js';
