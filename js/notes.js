
//add things to the array 
pets.push(petOne)
pets.push(petTwo)


/*
 move to function for ease of use 

// creating HTML via javascript 
let petElement = document.createElement('div');
// adding a class to my div 
petElement.classList.add('pet');

//creating a new element for the pet name 
let petNameElement = document.createElement('p');
petNameElement.classList.add('pet-name')
petNameElement.textContent = petOne.name;

//Adding the p element to the div element 
petElement.appendChild(petNameElement)

//
let petsListElement = document.getElementById('pets')
petsListElement.append(petElement);

*/

//createPetElement(petOne);
//createPetElement(petTwo);
//addPet();

// alt way of a making an array const array_name = [item1, item2, ...]; 

// creating pet objects
let petOne = new Pet('Fido');
let petTwo = new Pet('Booger');