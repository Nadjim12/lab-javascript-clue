// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
    Name:"mrGreen",
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: green
},

{
Name:"drOrchid",
firstName: "Doctor",
lastName: "Orchid",
occupation: "Scientist",
age: 26,
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "white"
},

{
Name: "profPlum",
firstName: "Victor",
lastName: "Plum",
occupation: "Designer",
age: 22,
description: "Billionaire video game designer",
image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
color: "purple"
},

{Name:"missScarlet",
firstName: "Kasandra",
lastName: "Scarlet",
occupation: "Actor",
age: 31,
description: "She is an A-list movie star with a dark past",
image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
color: "red",
},

{
Name:"mrsPeacock",
firstName: "Eleanor",
lastName: "Peacock",
occupation: "Socialité",
age: 36,
description: "She is from a wealthy family and uses her status and money to earn popularity",
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
color: "blue",
},

{
Name:"mrMustard",
firstName: "Jack",
lastName: "Mustard",
occupation: "Retired Football player",
age: 62,
description: "He is a former football player who tries to get by on his former glory",
image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
color: "yellow"
} 
]; 

// Rooms Array

const roomsArray = [
    {name:"Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"},
];

// Weapons Array

const weaponsArray = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20},
];


// ITERATION 2

function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

function pickMystery() {
const randomName = selectRandom(suspectsArray);
const randomWeapon = selectRandom(weaponsArray);
const randomRoom = selectRandom(roomsArray);

return {
    suspect: randomName,
    weapon: randomWeapon,
    room: randomRoom,
  };
};
const mystery = pickMystery();
console.log(mystery); 
console.log(mystery.suspect); 
console.log(mystery.weapon); 
console.log(mystery.room);

// ITERATION 3

function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    const message = `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
    return message;
  };
const envelope= pickMystery();
const message = revealMystery(envelope);
console.log(message);

