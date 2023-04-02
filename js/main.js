//constructor function 
function Pet(name,birthday,type ){
this.name = name;
this.birthday = birthday;
this.type = type;
this.alertDeleted = function(){
    alert(this.name + ' has been deleted')
}

}


//makes a pet array
let pets = new Array();



//function to create new 
function createPetElement(pet){

// creating HTML via javascript 
let petElement = document.createElement('div');
// adding a class to my div 
petElement.classList.add('pet');

//creating a new element for the pet name 
let petNameElement = document.createElement('p');
petNameElement.classList.add('pet-name');
petNameElement.textContent = 'Name: ' + pet.name;

// creating birthday element
let petBirthdayElement = document.createElement('p');
petBirthdayElement.classList.add('pet-bday');
petBirthdayElement.textContent = 'Birthday: ' + pet.birthday.toLocaleDateString();
// creating  type element 
let petTypeElement = document.createElement('p');
petTypeElement.classList.add('pet-type');
petTypeElement.textContent ='Type: ' + pet.type;


//Adding the p element to the div element 
petElement.appendChild(petNameElement);
petElement.appendChild(petBirthdayElement);
petElement.appendChild(petTypeElement);

petElement.onclick = function(){
    this.remove();
    pet.alertDeleted()
}

let petsListElement = document.getElementById('pets')
petsListElement.append(petElement);


}


function addPet(){
   let petName = document.getElementById('petName').value;
   let petBirthday = document.getElementById('petBirthday').valueAsDate;
   let petType = document.getElementById('select').value


   let newPet = new Pet(petName,petBirthday,petType);
   pets.push(newPet);
   console.log(pets)
   createPetElement(newPet);
}

